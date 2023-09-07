import { API } from 'jscodeshift';

const getFieldType = (name: string, typeAnnotation: any, api: API) => {
  const j = api.jscodeshift;
  try {
    switch (typeAnnotation.type) {
      case 'TSBigIntKeyword':
        return j.stringLiteral(name);
      case 'TSTypeReference':
        return j.spreadElement(
          name
            ? j.callExpression(
                j.memberExpression(
                  j.identifier(`bigInts${typeAnnotation.typeName.name}`),
                  j.identifier('map')
                ),
                [
                  j.arrowFunctionExpression(
                    [j.identifier('item')],
                    j.conditionalExpression(
                      j.binaryExpression(
                        '===',
                        j.identifier('item'),
                        j.stringLiteral('')
                      ),
                      j.stringLiteral(name),
                      j.templateLiteral(
                        [
                          j.templateElement(
                            { cooked: `${name}.`, raw: `${name}.` },
                            false
                          ),
                          j.templateElement({ cooked: '', raw: '' }, true),
                        ],
                        [j.identifier('item')]
                      )
                    )
                  ),
                ]
              )
            : j.identifier(`bigInts${typeAnnotation.typeName.name}`)
        );
      case 'TSArrayType':
        return getFieldType(name, typeAnnotation.elementType, api);
    }
  } catch (e) {
    console.log(e);
  }
  return undefined;
};

export default (root: any, api: API) => {
  const j = api.jscodeshift;
  root.find(j.ImportDeclaration).forEach((row) => {
    const newImport = j.importDeclaration(
      [
        j.importSpecifier(
          j.identifier('bigInts' + row.node.specifiers[0].imported.name)
        ),
      ],
      j.stringLiteral(row.node.source.value)
    );
    row.insertAfter(newImport);
  });
  let name = '';
  const bigIntFields = [];
  const addField = (element) => {
    if (element) {
      bigIntFields.push(element);
    }
  };
  root.find(j.TSTypeAliasDeclaration).forEach((item) => {
    name = item.node.original.id.name;
    switch (item.node?.typeAnnotation?.type) {
      case 'TSBigIntKeyword':
        bigIntFields.push(j.stringLiteral(''));
        break;
      case 'TSIntersectionType':
        item.node?.typeAnnotation?.types.forEach((type) =>
          addField(getFieldType('', type, api))
        );
        break;
      default:
        addField(getFieldType('', item.node?.typeAnnotation, api));
    }
  });
  root.find(j.TSInterfaceDeclaration).forEach((item) => {
    name = item.node.original.id.name;
  });
  const properties = root.find(j.TSPropertySignature);
  properties.forEach((item) => {
    addField(
      getFieldType(
        item.node.key.name,
        item.node.typeAnnotation.typeAnnotation,
        api
      )
    );
  });
  const bigInts = j.variableDeclaration('const', [
    j.variableDeclarator(
      j.identifier(`bigInts${name}`),
      j.arrayExpression(bigIntFields)
    ),
  ]);
  const exportBigInts = j.exportNamedDeclaration(bigInts);
  root.get().node.program.body.push(exportBigInts);
};

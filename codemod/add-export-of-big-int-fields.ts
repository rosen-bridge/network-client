import { API } from 'jscodeshift';

const getFieldType = (name: string, typeAnnotation: any, api: API) => {
  const j = api.jscodeshift;
  try {
    switch (typeAnnotation.type) {
      case 'TSBigIntKeyword':
        return j.stringLiteral(name);
      case 'TSTypeReference':
        return j.spreadElement(
          j.callExpression(
            j.memberExpression(
              j.identifier(`bigInts${typeAnnotation.typeName.name}`),
              j.identifier('map')
            ),
            [
              j.arrowFunctionExpression(
                [j.identifier('item')],
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
              ),
            ]
          )
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
  root.find(j.TSTypeAliasDeclaration).forEach((item) => {
    name = item.node.original.id.name;
  });
  root.find(j.TSInterfaceDeclaration).forEach((item) => {
    name = item.node.original.id.name;
  });
  const properties = root.find(j.TSPropertySignature);
  const bigIntFields = [];
  properties.forEach((item) => {
    const element = getFieldType(
      item.node.key.name,
      item.node.typeAnnotation.typeAnnotation,
      api
    );
    if (element) {
      bigIntFields.push(element);
    }
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

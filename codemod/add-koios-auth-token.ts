import { API } from 'jscodeshift';

export default (root: any, api: API) => {
  const j = api.jscodeshift;
  // import createAxiosInstanceWithHeaders instead of createAxiosInstance
  root
    .find(api.jscodeshift.ImportDeclaration)
    .filter((path) => path.value.source.value === '../axios')
    .forEach((path) => {
      path.value.specifiers = path.value.specifiers.map((specifier) => {
        if (specifier.imported.name === 'createAxiosInstance') {
          specifier.imported.name = 'createAxiosInstanceWithHeaders';
        }
        return specifier;
      });
    });

  // Fix class declaration to include authToken
  root
    .find(api.jscodeshift.ExportNamedDeclaration, { exportKind: 'value' })
    .forEach((item) => {
      item.value.declaration.declarations[0].init.params = [
        j.identifier('url'),
        j.identifier('authToken'),
      ];
      item.value.declaration.declarations[0].init.params[0].typeAnnotation =
        j.typeAnnotation(j.stringTypeAnnotation());
      item.value.declaration.declarations[0].init.params[1].typeAnnotation =
        j.typeAnnotation(j.stringTypeAnnotation());
      item.value.declaration.declarations[0].init.params[1].optional = true;
    });

  // Fix instance object to use authToken
  root.find(j.VariableDeclaration).forEach((varPath) => {
    const declarator = varPath.value.declarations[0];
    if (
      declarator.id.name === 'instance' &&
      declarator.init.callee.name === 'createAxiosInstance'
    ) {
      declarator.init = j.callExpression(
        j.identifier('createAxiosInstanceWithHeaders'),
        [
          j.identifier('url'),
          j.conditionalExpression(
            j.identifier('authToken'),
            j.objectExpression([
              j.property(
                'init',
                j.identifier('Authorization'),
                j.templateLiteral(
                  [
                    j.templateElement(
                      { cooked: 'Bearer ', raw: 'Bearer ' },
                      false
                    ),
                    j.templateElement({ cooked: '', raw: '' }, true),
                  ],
                  [j.identifier('authToken')]
                )
              ),
            ]),
            j.objectExpression([])
          ),
        ]
      );
    }
  });
};

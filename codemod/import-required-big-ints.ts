import { API } from 'jscodeshift';

export default (bigIntImports: Array<string>, root: any, api: API) => {
  const j = api.jscodeshift;
  root.find(j.ImportDeclaration).forEach((row) => {
    if (row.type === j.ImportDefaultSpecifier) {
      return;
    }
    const importSpecifiers = [];
    row.node.specifiers.forEach((specifier) => {
      if (bigIntImports.indexOf(specifier.imported.name) !== -1) {
        if (importSpecifiers.indexOf(`bigInts${specifier.imported.name}`)) {
          importSpecifiers.push(`bigInts${specifier.imported.name}`);
        }
      }
    });
    if (importSpecifiers.length > 0) {
      const newImport = j.importDeclaration(
        importSpecifiers.map((item) => j.importSpecifier(j.identifier(item))),
        j.stringLiteral(row.node.source.value)
      );
      row.insertAfter(newImport);
    }
  });
};

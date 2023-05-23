import { API, FileInfo } from 'jscodeshift';

export default (root: any, api: API) => {
  const j = api.jscodeshift;
  root.find(j.ImportDeclaration).forEach((row) => {
    if (row.type === j.ImportDefaultSpecifier) {
      return;
    }
    let isAxios = false;
    let bigIntFactoryImported = false;
    row.node.specifiers.forEach((specifier) => {
      if (specifier.imported.name === 'createAxiosInstance') {
        isAxios = true;
      }
      if (isAxios && specifier.imported.name === 'JsonFieldBigintFactory') {
        bigIntFactoryImported = true;
      }
    });
    if (isAxios && !bigIntFactoryImported) {
      j(row).replaceWith(
        // Build a new import declaration node based on the existing one
        j.importDeclaration(
          [
            ...row.node.specifiers,
            j.importSpecifier(j.identifier('JsonFieldBigintFactory')),
          ], // Insert our new import specificer
          row.node.source
        )
      );
    }
  });
};

import { API } from 'jscodeshift';

export default (root: any, api: API) => {
  const j = api.jscodeshift;
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
};

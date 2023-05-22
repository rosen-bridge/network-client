import { API } from 'jscodeshift';

export default (root: any, api: API) => {
  const j = api.jscodeshift;
  // console.log(root.find(api.jscodeshift.ExportNamedDeclaration, {exportKind: 'value'}).length)
  root
    .find(api.jscodeshift.ExportNamedDeclaration, { exportKind: 'value' })
    .forEach((item) => {
      item.value.declaration.declarations[0].init.params = [
        j.identifier('(url: string)'),
      ];
      const axios = j.variableDeclaration('const', [
        j.variableDeclarator(
          j.identifier('instance'),
          j.callExpression(j.identifier('createAxiosInstance'), [
            j.identifier('url'),
          ])
        ),
      ]);
      // const instanceDeclaration = j.identifier('const instance = axios.createInstance(url);')
      item.value.declaration.declarations[0].init.body.body.unshift(axios);
    });
};

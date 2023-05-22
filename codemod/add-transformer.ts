import { API } from 'jscodeshift';

const getFunctionCallTypeCast = (paramType: any, api: API) => {
  if (paramType === undefined) return '';
  if (paramType.type === 'TSArrayType') {
    return getFunctionCallTypeCast(paramType.elementType, api);
  }
  if (paramType.type === 'TSTypeReference') {
    return paramType.typeName.name;
  }
  return '';
};

export default (root: any, api: API) => {
  const j = api.jscodeshift;
  const bigIntImports = [];
  root.find(j.CallExpression).forEach(({ value }) => {
    if (value.callee.name === 'createAxiosInstance') {
      value.callee.name = 'instance';
      const typeParam = value.typeParameters.params[0];
      const typeCast = getFunctionCallTypeCast(typeParam, api);
      if (typeCast !== '') {
        const transform = j.objectProperty(
          j.identifier('transformResponse'),
          j.callExpression(j.identifier('JsonFieldBigintFactory'), [
            j.identifier(`bigInts${typeCast}`),
          ])
        );
        bigIntImports.push(typeCast);
        value.arguments[0].properties.push(transform);
      }
    }
  });
  return bigIntImports;
};

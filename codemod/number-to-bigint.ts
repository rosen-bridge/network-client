import { API, FileInfo } from 'jscodeshift';

const transformer = (file: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.find(j.TSNumberKeyword).replaceWith(j.tsBigIntKeyword);

  return root.toSource();
};

export default transformer;

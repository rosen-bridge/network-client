import { API, FileInfo } from 'jscodeshift';
import addExportOfBigIntFields from './add-export-of-big-int-fields';
import addTransformer from './add-transformer';
import importRequiredBigInts from './import-required-big-ints';
import importTransformFunction from './import-transform-function';
import addBaseUrlToGetApi from './add-base-url-to-get-api';

const transformer = (file: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  if (file.path.indexOf('/types/') !== -1) {
    addExportOfBigIntFields(root, api);
  } else {
    const bigIntImports = addTransformer(root, api);
    importRequiredBigInts(bigIntImports, root, api);
    importTransformFunction(root, api);
    // fix getDefault to get baseURL and create axios instance
    addBaseUrlToGetApi(root, api);
  }
  return root.toSource();
};

export default transformer;

import { API, FileInfo } from 'jscodeshift';
import addKoiosAuthToken from './add-koios-auth-token';

const transformer = (file: FileInfo, api: API) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  addKoiosAuthToken(root, api);

  return root.toSource();
};

export default transformer;

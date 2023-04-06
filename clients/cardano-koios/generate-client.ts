import fs from 'fs';
import { execSync } from 'child_process';

import tmp from 'tmp';
import yaml, { YAMLMap, parseDocument, visit } from 'yaml';

const transformYaml = () => {
  const yamlString = fs.readFileSync('./openapi.yaml').toString();

  const document = parseDocument(yamlString);
  visit(document, {
    Map(key, mapNode) {
      const ref = mapNode.get('$ref');
      const isRefValid = (ref: unknown): ref is string => !!ref;
      if (isRefValid(ref)) {
        if (/#\/components\/schemas\/(.*\/.*)/.test(ref)) {
          const replacingNode = document.getIn(ref.slice(2).split('/'));
          return replacingNode as YAMLMap;
        }
      }
    },
  });

  return document;
};

const transformedDocument = transformYaml();

const tempFile = tmp.fileSync();

fs.writeFileSync(tempFile.name, yaml.stringify(transformedDocument, null, 2));
execSync('npm run generate-client-base', {
  env: {
    ...process.env,
    SPEC_FILE: tempFile.name,
  },
});
tempFile.removeCallback();

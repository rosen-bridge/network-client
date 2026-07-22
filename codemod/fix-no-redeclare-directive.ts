import { API } from 'jscodeshift';

const DIRECTIVE = ' eslint-disable-next-line no-redeclare';

const isDirective = (comment: any) =>
  comment.type.startsWith('Comment') &&
  comment.value.includes('eslint-disable-next-line');

/**
 * orval declares its enums as a merged `type` + `const` pair sharing one name,
 * and guards the `const` half with an eslint-disable directive. It currently
 * names the rule `@typescript-eslint/no-redeclare`, but this repo's eslint
 * config only enables the base `no-redeclare` rule, so the directive is unused:
 * `eslint --fix` strips it and the base rule then reports the pair.
 *
 * Detect the merged pair by name rather than by trusting orval's comment text,
 * so the directive stays correct even if orval renames or drops it.
 */
export default (root: any, api: API) => {
  const j = api.jscodeshift;

  const typeNames = new Set<string>();
  root
    .find(j.TSTypeAliasDeclaration)
    .forEach((path: any) => typeNames.add(path.node.id.name));

  root.find(j.VariableDeclaration).forEach((path: any) => {
    const name = path.node.declarations[0]?.id?.name;
    if (!typeNames.has(name)) return;

    // The directive must lead whichever node is printed first — recast attaches
    // leading comments to the `export` wrapper when the declaration is exported.
    const parent = path.parent.node;
    const target =
      parent.type === 'ExportNamedDeclaration' ? parent : path.node;
    target.comments = [
      j.commentLine(DIRECTIVE, true, false),
      ...(target.comments ?? []).filter((c: any) => !isDirective(c)),
    ];
  });
};

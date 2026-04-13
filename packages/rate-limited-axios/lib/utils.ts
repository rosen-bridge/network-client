/**
 * Binds a function to a fixed `this` value (axios `bind` helper).
 * @param fn The function to bind.
 * @param thisArg The object to use as `this` when calling `fn`.
 * @returns A function that forwards arguments to `fn` with `thisArg` as `this`.
 */
export const bindMethod =
  (fn: any, thisArg: object) =>
  (...args: any[]) =>
    fn.apply(thisArg, args);

/**
 * Copies properties from `source` onto `target`, optionally binding functions to `thisArg`.
 * @param target The object to receive properties.
 * @param source The object to copy from (typically a prototype or instance).
 * @param thisArg If provided, function values are bound to `thisArg`; otherwise copied as-is.
 * @returns The mutated `target`.
 */
export const extendInstance = (
  target: object,
  source: object,
  thisArg: object | null,
): object => {
  const keys = Object.getOwnPropertyNames(source);
  for (const key of keys) {
    const val = (source as Record<string, unknown>)[key];
    try {
      if (thisArg !== null && typeof val === 'function') {
        (target as Record<string, unknown>)[key] = bindMethod(val, thisArg);
      } else {
        (target as Record<string, unknown>)[key] = val;
      }
    } catch {
      // Some function properties (e.g. `constructor` on native bound functions) are read-only.
    }
  }
  return target;
};

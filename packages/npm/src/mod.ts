/**
 * @fileoverview
 * NPM Dynamic Imports Core Implementation
 *
 * This NPM package provides direct access to the built-in `import()` function.
 * It serves as the foundation for the JSR dynamic imports workaround, allowing
 * JSR packages to perform dynamic imports by wrapping this NPM package.
 *
 * This package circumvents Deno's custom import behavior that prevents dynamic
 * imports in JSR packages by providing a simple wrapper around the native import function.
 *
 * @see {@link https://github.com/denoland/deno/discussions/26266}
 * @see {@link https://jsr.io/@brad-jones/jsr-dynamic-imports} JSR Wrapper Package
 */

// deno-lint-ignore-file no-explicit-any

/**
 * Dynamically imports a module using the native `import()` function.
 *
 * This function provides direct access to JavaScript's built-in dynamic import capability.
 * It serves as the core implementation for the JSR dynamic imports workaround, allowing
 * JSR packages to perform dynamic imports through this NPM package.
 *
 * @param path - The module path or URL to dynamically import. Can be:
 *               - Relative path (e.g., "./module.js", "../utils.ts")
 *               - Absolute path (e.g., "/path/to/module.js")
 *               - URL string (e.g., "https://example.com/module.js")
 *               - NPM package name (e.g., "lodash", "@scope/package")
 *
 * @returns A Promise that resolves to the imported module object containing
 *          all exported members from the target module.
 *
 * @throws {TypeError} When the module specifier is invalid or malformed.
 * @throws {Error} When the module cannot be found, loaded, or has compilation errors.
 * @throws {SyntaxError} When the target module contains syntax errors.
 * @throws {ReferenceError} When the module has unresolved dependencies.
 *
 * @example
 * ```typescript
 * import { importModule } from "@brad-jones/jsr-dynamic-imports";
 *
 * // Import an NPM package dynamically
 * const lodash = await importModule("lodash");
 * console.log(lodash.chunk([1, 2, 3, 4], 2));
 *
 * // Import a URL-based module
 * const module = await importModule("https://deno.land/std/fs/mod.ts");
 *
 * // Import with dynamic path construction
 * const environment = "production";
 * const config = await importModule(`./config/${environment}.js`);
 *
 * // Import using variables
 * const moduleName = "./utils.ts";
 * const utils = await importModule(moduleName);
 * ```
 *
 * @see {@link https://jsr.io/@brad-jones/jsr-dynamic-imports} JSR Package
 * @see {@link https://www.npmjs.com/package/@brad-jones/jsr-dynamic-imports} NPM Package
 * @see {@link https://github.com/denoland/deno/discussions/26266} Related Deno Discussion
 */
export async function importModule(path: string): Promise<any> {
  return await import(path);
}

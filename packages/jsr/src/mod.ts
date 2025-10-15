/**
 * @fileoverview
 * JSR Dynamic Imports Workaround
 *
 * This package provides a workaround for the inability to use dynamic imports in JSR packages.
 * It wraps an NPM package that provides access to the built-in `import()` function, circumventing
 * Deno's custom import behavior applied to HTTP imports from JSR.
 *
 * @see {@link https://github.com/denoland/deno/discussions/26266}
 */

// deno-lint-ignore-file no-explicit-any
import { importModule as npmImportModule } from "@brad-jones/jsr-dynamic-imports";

/**
 * Dynamically imports a module using a workaround for JSR's dynamic import limitations.
 *
 * This function wraps the NPM package `@brad-jones/jsr-dynamic-imports` which provides
 * access to the native `import()` function. This circumvents Deno's custom import behavior
 * that is applied to any HTTP import from JSR or other sources.
 *
 * @param path - The module path or URL to dynamically import. Can be a relative path,
 *               absolute path, or URL string.
 *
 * @returns A Promise that resolves to the imported module object.
 *
 * @throws {TypeError} When the module path is invalid or cannot be resolved.
 * @throws {Error} When the module cannot be loaded or has syntax errors.
 *
 * @example
 * ```typescript
 * import { importModule } from "@brad-jones/jsr-dynamic-imports";
 *
 * // Import a module using a dynamic variable
 * const moduleName = "https://deno.land/std/fs/mod.ts";
 * const fsModule = await importModule(moduleName);
 *
 * // Import a local module
 * const localModule = await importModule("./my-module.ts");
 *
 * // Use with dynamic path construction
 * const version = "v1.0.0";
 * const apiModule = await importModule(`https://example.com/api/${version}/mod.ts`);
 * ```
 *
 * @see {@link https://jsr.io/@brad-jones/jsr-dynamic-imports} JSR Package
 * @see {@link https://www.npmjs.com/package/@brad-jones/jsr-dynamic-imports} NPM Package
 * @see {@link https://github.com/denoland/deno/discussions/26266} Related Deno Discussion
 */
export async function importModule(path: string): Promise<any> {
  return await npmImportModule(path);
}

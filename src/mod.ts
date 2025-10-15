// deno-lint-ignore-file no-explicit-any

export async function importModule(path: string): Promise<any> {
    return await import(path);
}
// deno-lint-ignore-file no-explicit-any
import { importModule as npmImportModule } from "@brad-jones/jsr-dynamic-imports";

export async function importModule(path: string): Promise<any> {
    return await npmImportModule(path);
}
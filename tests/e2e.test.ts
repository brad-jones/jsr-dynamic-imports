import { expect } from "@std/expect"
import { importModule } from "https://raw.githubusercontent.com/brad-jones/jsr-dynamic-imports/refs/heads/master/src/mod.ts";

Deno.test("importModule - end to end test", async() => {
    const result = await importModule(`${import.meta.dirname}/exampleModule.ts`);
    expect(result.foo).toBe("bar");
});
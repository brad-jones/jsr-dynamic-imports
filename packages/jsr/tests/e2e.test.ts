import { expect } from "@std/expect";
import { importModule } from "../src/mod.ts";

Deno.test("importModule - end to end test", async() => {
    const result = await importModule(`${import.meta.dirname}/exampleModule.ts`);
    expect(result.foo).toBe("bar");
});
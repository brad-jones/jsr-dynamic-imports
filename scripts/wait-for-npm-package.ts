#!/usr/bin/env -S deno run -qA --ext=ts
import { $ } from "@david/dax";
import { retry, RetryError } from "@std/async";

const packageName = Deno.args[0];
const packageVersion = Deno.args[1];

try {
  await retry(async () => {
    console.log(`looking for ${packageName}@${packageVersion}...`);
    await $`npm view ${packageName}@${packageVersion}`.quiet();
    console.log(`found at npmjs.com`);
  }, {
    maxAttempts: 300,
    minTimeout: 3000,
    multiplier: 1,
    jitter: 0,
  });
} catch (err) {
  if (err instanceof RetryError) {
    console.log("Retry error :", err.message);
    console.log("Error cause :", err.cause);
  }
}

# jsr-dynamic-imports

This project provides a workaround for the inability to use dynamic imports in JSR packages.

see: <https://github.com/denoland/deno/discussions/26266>

## How does it work?

It is made up of 2 packages.

- One that gets published to NPM that simply wraps the built-in `import` function.
  - <https://www.npmjs.com/package/@brad-jones/jsr-dynamic-imports>

- And the second package is published to JSR that wraps the NPM package.
  - <https://jsr.io/@brad-jones/jsr-dynamic-imports>

This seems to circumvent Deno's custom import behavior that is applied to any
HTTP import, be it from <https://jsr.io> or otherwise.

## How do I use it?

```sh
deno add jsr:@brad-jones/jsr-dynamic-imports
```

```ts
import { importModule } from "@brad-jones/jsr-dynamic-imports";

const myModule = await importModule(dynamicVariable);
```

_NB: Alternatively one could import the NPM package directly. eg: `npm:@brad-jones/jsr-dynamic-imports`\
We just provide the JSR package as a convenience for the Deno / JSR community_

import { build, emptyDir } from "@deno/dnt";

const outDir = Deno.args[0];
const version = Deno.args[1];

await emptyDir(outDir);

await build({
  entryPoints: [`${import.meta.dirname}/../src/mod.ts`],
  outDir,
  importMap: "deno.json",
  scriptModule: false,
  skipSourceOutput: true,
  typeCheck: false,
  skipNpmInstall: true,
  compilerOptions: {
    target: "Latest",
  },
  test: false,
  shims: {
    deno: true,
  },
  package: {
    name: "@brad-jones/jsr-dynamic-imports",
    version,
    description:
      "A workaroud for JSR's inability to use dynamic imports, see: https://github.com/denoland/deno/discussions/26266",
    license: "MIT",
    author: {
      name: "Brad Jones",
      email: "brad@bjc.id.au",
    },
    repository: {
      type: "git",
      url: "git+https://github.com/brad-jones/jsr-dynamic-imports.git",
    },
    bugs: {
      url: "https://github.com/brad-jones/jsr-dynamic-imports/issues",
    },
  },
});

await Deno.copyFile(`${import.meta.dirname}/../../../LICENSE`, `${outDir}/LICENSE`);
await Deno.copyFile(`${import.meta.dirname}/../../../README.md`, `${outDir}/README.md`);
await Deno.copyFile(`${import.meta.dirname}/../../../CHANGELOG.md`, `${outDir}/CHANGELOG.md`);

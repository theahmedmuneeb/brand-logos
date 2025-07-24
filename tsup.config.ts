import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    outDir: "dist",
    format: ["esm", "cjs"],
    splitting: false,
    dts: true,
    sourcemap: false,
    clean: true,
    target: "esnext",
    treeshake: true,
});

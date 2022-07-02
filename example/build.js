const esbuild = require('esbuild');

esbuild
    .build({
        entryPoints: ['../src/index.ts'],
        outdir: './public/js',
        bundle: true,
        sourcemap: true,
        minify: true,
        splitting: true,
        format: 'esm',
        target: ['esnext']
    })
    .catch(() => process.exit(1));

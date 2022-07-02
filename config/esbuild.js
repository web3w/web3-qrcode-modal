const esbuild = require('esbuild');

esbuild
    .build({
        entryPoints: ['src/index.ts'],
        outdir: 'lib',
        bundle: true,
        sourcemap: true,
        minify: true,
        splitting: true,
        // watch: {
        //     onRebuild(error, result) {
        //         if (error) console.error('watch build failed:', error)
        //         else console.log('watch build succeeded:', result)
        //     },
        // },
        format: 'esm',
        target: ['esnext']
    }).then((res) => {
        console.log("ESbuild", res)
    }).catch(() => process.exit(1));

const esbuild = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");

esbuild
    .serve(
        {
            servedir: "./example/public",
            port: 8000,
        },
        {
            entryPoints: ["./src/index.ts"],
            outfile: "./example/public/js/app.js",
            bundle: true,
            sourcemap: true,
            loader: {
                ".js": "jsx",
            },
            format: 'esm',
            plugins: [inlineImage()],
        }
    )
    .then((server) => {
        console.log("Server is running at: http://localhost:8000/")
        // server.stop();
    })
    .catch(() => process.exit());

// optimize-png.mjs
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";

const __dirname = dirname(fileURLToPath(import.meta.url));

const files = await imagemin(["assets/*.png"], {
  destination: "assets-optimized",
  plugins: [
    imageminPngquant({
      quality: [0.6, 0.8], // от 60% до 80% качества
    }),
  ],
});

console.log(
  "✅ PNG optimized:",
  files.map((f) => f.destinationPath)
);

import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputFolder = "./src/assets/images";
const outputFolder = "./src/assets/images-webp";

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdirSync(inputFolder).forEach(file => {
  const ext = path.extname(file).toLowerCase();

  if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(outputFolder, `${path.parse(file).name}.webp`);

    sharp(inputPath)
      .webp({ quality: 75 })
      .toFile(outputPath)
      .then(() => console.log(`Converted: ${file}`))
      .catch(err => console.error("Error:", err));
  }
});

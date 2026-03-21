import fs from "fs";
import path from "path";

const projectDir = "./src";  // scan all files inside src folder

function updateImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  const updatedContent = content
    .replace(/\/assets\/images\/([^"]+)\.(png|jpg|jpeg)/g, "/assets/images-webp/$1.webp")
    .replace(/\/assets\/images\\([^"]+)\.(png|jpg|jpeg)/g, "/assets/images-webp/$1.webp");

  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent, "utf8");
    console.log("Updated imports in:", filePath);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkDir(fullPath);  // recursive — goes inside folders
    } else if (entry.name.endsWith(".js") || entry.name.endsWith(".jsx")) {
      updateImportsInFile(fullPath);
    }
  });
}

walkDir(projectDir);

console.log("✔ All imports updated to use images-webp.");

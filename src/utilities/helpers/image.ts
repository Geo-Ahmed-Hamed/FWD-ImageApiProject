import sharp from "sharp";
import path from "path";
import fs from "fs";

class Image {
  constructor(public filename: string) {
    if (!fs.existsSync(this.getOriginalFullPath()))
      throw new Error(`File: ${this.filename} does not exist.`);
  }

  getOriginalFullPath(): string {
    return path.join(
      __dirname,
      "..",
      "..",
      "utilities",
      "images",
      "original",
      `${this.filename}.jpg`
    );
  }

  getGeneratedFullPath(width: number, height: number): string {
    return path.join(
      __dirname,
      "..",
      "..",
      "utilities",
      "images",
      "generated",
      `${this.filename}-${width}-${height}.jpg`
    );
  }

  resize(width: number, height: number) {
    return sharp(this.getOriginalFullPath()).resize(+width, +height);
  }
}

export default Image;

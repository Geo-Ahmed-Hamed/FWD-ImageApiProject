import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import sharp from "sharp";

const images = express.Router();

images.get("/", async (req: Request, res: Response) => {
  try {
    const filename = req.query.filename as string;
    const width = req.query.width as unknown as number;
    const height = req.query.height as unknown as number;

    const fullPath = path.join(
      __dirname,
      "..",
      "..",
      "utilities",
      "images",
      "original",
      `${filename}.jpg`
    );

    if (fs.existsSync(fullPath)) {
      const newFullPath = path.join(
        __dirname,
        "..",
        "..",
        "utilities",
        "images",
        "generated",
        `${filename}-${width}-${height}.jpg`
      );

      await sharp(fullPath).resize(+width, +height).toFile(newFullPath);

      res.sendFile(newFullPath);
    } else {
      res.send(`Error: File: ${filename} does not exist.`);
    }
  } catch (error) {
    res.send(error);
  }
});

export default images;

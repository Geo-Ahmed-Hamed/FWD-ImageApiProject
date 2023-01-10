import { Request, Response } from "express";
import path from "path";
import cache from "./cache";

// eslint-disable-next-line @typescript-eslint/ban-types
const cacheMiddleware = (req: Request, res: Response, next: Function): void => {
  const filename = req.query.filename as string;
  const width = req.query.width as string;
  const height = req.query.height as string;

  if (cache.exists(filename, width, height)) {
    const newFullPath = path.join(
      __dirname,
      "..",
      "..",
      "utilities",
      "images",
      "generated",
      `${filename}-${width}-${height}.jpg`
    );

    res.sendFile(newFullPath);
  } else {
    cache.add(filename, width, height);
    next();
  }
};

export default cacheMiddleware;

import { Request, Response } from "express";
import Cache from "./cache";
import Image from "../../helpers/image";

// eslint-disable-next-line @typescript-eslint/ban-types
const cacheMiddleware = (req: Request, res: Response, next: Function): void => {
  try {
    const filename = req.query.filename as string;
    const width = req.query.width as string;
    const height = req.query.height as string;
  
    const image = new Image(filename);
  
    if (Cache.exists(filename, width, height)) {
      res.sendFile(image.getGeneratedFullPath(+width, +height));
    } else {
      next();
    }
  } catch (error) {
    next();
  }
};

export default cacheMiddleware;

import express, { Request, Response } from "express";
import Image from "../../utilities/helpers/image";
import Cache from "../../utilities/middlewares/cache/cache";

const images = express.Router();

images.get("/", async (req: Request, res: Response) => {
  try {
    const filename = req.query.filename as string;
    const width = req.query.width as unknown as number;
    const height = req.query.height as unknown as number;

    const image = new Image(filename);

    const newFullPath = image.getGeneratedFullPath(width, height);

    await image.resize(+width, +height).toFile(newFullPath);

    Cache.add(filename, width.toString(), height.toString());

    res.sendFile(newFullPath);
  } catch (error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    res.send(message);
  }
});

export default images;

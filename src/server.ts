import express, { Request, Response } from "express";
import images from "./routes/api/images";
import cacheMiddleware from "./utilities/middlewares/cache/cacheMiddleware";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Home Page ...");
});

app.use("/images", cacheMiddleware, images);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

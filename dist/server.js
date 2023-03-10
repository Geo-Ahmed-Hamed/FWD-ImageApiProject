"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./routes/api/images"));
var cacheMiddleware_1 = __importDefault(
  require("./utilities/middlewares/cache/cacheMiddleware")
);
var app = (0, express_1.default)();
var port = 3000;
app.get("/", function (req, res) {
  res.send("Home Page ...");
});
app.use("/images", cacheMiddleware_1.default, images_1.default);
app.listen(port, function () {
  console.log("Listening on port ".concat(port));
});

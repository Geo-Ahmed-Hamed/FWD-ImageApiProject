"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cache_1 = __importDefault(require("./cache"));
var image_1 = __importDefault(require("../../helpers/image"));
// eslint-disable-next-line @typescript-eslint/ban-types
var cacheMiddleware = function (req, res, next) {
    try {
        var filename = req.query.filename;
        var width = req.query.width;
        var height = req.query.height;
        var image = new image_1.default(filename);
        if (cache_1.default.exists(filename, width, height)) {
            res.sendFile(image.getGeneratedFullPath(+width, +height));
        }
        else {
            next();
        }
    }
    catch (error) {
        next();
    }
};
exports.default = cacheMiddleware;

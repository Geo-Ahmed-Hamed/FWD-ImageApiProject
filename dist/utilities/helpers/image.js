"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var Image = /** @class */ (function () {
    function Image(filename) {
        this.filename = filename;
        if (!fs_1.default.existsSync(this.getOriginalFullPath()))
            throw new Error("File: ".concat(this.filename, " does not exist."));
    }
    Image.prototype.getOriginalFullPath = function () {
        return path_1.default.join(__dirname, "..", "..", "utilities", "images", "original", "".concat(this.filename, ".jpg"));
    };
    Image.prototype.getGeneratedFullPath = function (width, height) {
        return path_1.default.join(__dirname, "..", "..", "utilities", "images", "generated", "".concat(this.filename, "-").concat(width, "-").concat(height, ".jpg"));
    };
    Image.prototype.resize = function (width, height) {
        return (0, sharp_1.default)(this.getOriginalFullPath()).resize(+width, +height);
    };
    return Image;
}());
exports.default = Image;

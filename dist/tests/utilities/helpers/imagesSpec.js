"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("../../../utilities/helpers/image"));
var fs_1 = __importDefault(require("fs"));
describe("Image Tests", function () {
    it("Expect Not Throw Error if Image File Exist", function () {
        expect(function () { return new image_1.default("egypt"); }).not.toThrow();
    });
    it("Expect Throw Error if Image File Not Exist", function () {
        expect(function () { return new image_1.default("egypt_not_exist"); }).toThrow();
    });
    it("Expect File Actually Exist", function () {
        new image_1.default("egypt");
        var result = fs_1.default.existsSync("D:\\Knowledge\\Others\\Node\\ImageApiProject\\dist\\utilities\\images\\original\\egypt.jpg");
        expect(result).toBe(true);
    });
    it("Expect getOriginalFullPath Return Right Full Path", function () {
        var image = new image_1.default("egypt");
        expect(image.getOriginalFullPath()).toBe("D:\\Knowledge\\Others\\Node\\ImageApiProject\\dist\\utilities\\images\\original\\egypt.jpg");
    });
    it("Expect getGeneratedFullPath Return Right Generated Full Path", function () {
        var image = new image_1.default("egypt");
        expect(image.getGeneratedFullPath(100, 100)).toBe("D:\\Knowledge\\Others\\Node\\ImageApiProject\\dist\\utilities\\images\\generated\\egypt-100-100.jpg");
    });
});
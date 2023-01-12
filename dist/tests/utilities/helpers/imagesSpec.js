"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("../../../utilities/helpers/image"));
var path_1 = __importDefault(require("path"));
describe("Image Tests", function () {
  it("Expect Not Throw Error if Image File Exist", function () {
    expect(function () {
      return new image_1.default("egypt");
    }).not.toThrow();
  });
  it("Expect Throw Error if Image File Not Exist", function () {
    expect(function () {
      return new image_1.default("egypt_not_exist");
    }).toThrow();
  });
  it("Expect getOriginalFullPath Return Right Path", function () {
    var image = new image_1.default("egypt");
    expect(image.getOriginalFullPath()).toContain(
      path_1.default.join("original", "egypt.jpg")
    );
  });
  it("Expect getGeneratedFullPath Return Right Generated Path", function () {
    var image = new image_1.default("egypt");
    expect(image.getGeneratedFullPath(100, 100)).toContain(
      path_1.default.join("generated", "egypt-100-100.jpg")
    );
  });
  it("Expect Not Throw Error at Image Processing", function () {
    var image = new image_1.default("egypt");
    expect(function () {
      return image.resize(100, 100);
    }).not.toThrow();
  });
});

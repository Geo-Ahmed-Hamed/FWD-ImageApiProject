import Image from "../../../utilities/helpers/image";
import fs from "fs";
import path from "path";

describe("Image Tests", function () {
  it("Expect Not Throw Error if Image File Exist", function () {
    expect(() => new Image("egypt")).not.toThrow();
  });

  it("Expect Throw Error if Image File Not Exist", function () {
    expect(() => new Image("egypt_not_exist")).toThrow();
  });

  it("Expect File Actually Exist", function () {
    new Image("egypt");
    const result = fs.existsSync(
      path.join(
        __dirname,
        "..",
        "..",
        "utilities",
        "images",
        "original",
        "egypt.jpg"
      )
      .replace("\\test", "")
      .replace("dists", "dist")
    );
    expect(result).toBe(true);
  });

  it("Expect getOriginalFullPath Return Right Full Path", function () {
    const image = new Image("egypt");
    expect(image.getOriginalFullPath()).toBe(
      path.join(
        __dirname,
        "..",
        "..",
        "utilities",
        "images",
        "original",
        "egypt.jpg"
      )
      .replace("\\test", "")
      .replace("dists", "dist")
    );
  });

  it("Expect getGeneratedFullPath Return Right Generated Full Path", function () {
    const image = new Image("egypt");
    expect(image.getGeneratedFullPath(100, 100)).toBe(
      path.join(
        __dirname,
        "..",
        "..",
        "utilities",
        "images",
        "generated",
        "egypt-100-100.jpg"
      )
      .replace("\\test", "")
      .replace("dists", "dist")
    );
  });

  it("Expect Not Throw Error at Image Processing", function () {
    const image = new Image("egypt");
    expect(() => image.resize(100,100)).not.toThrow();
  });

});

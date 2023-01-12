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

  it("Expect getOriginalFullPath Return Right Path", function () {
    const image = new Image("egypt");
    expect(image.getOriginalFullPath()).toContain(
      path.join("original", "egypt.jpg")
    );
  });

  it("Expect getGeneratedFullPath Return Right Generated Path", function () {
    const image = new Image("egypt");
    expect(image.getGeneratedFullPath(100, 100)).toContain(
      path.join("generated", "egypt-100-100.jpg")
    );
  });

  it("Expect Not Throw Error at Image Processing", function () {
    const image = new Image("egypt");
    expect(() => image.resize(100, 100)).not.toThrow();
  });
});

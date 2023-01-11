import Image from "../../../utilities/helpers/image";
import fs from "fs";

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
      "D:\\Knowledge\\Others\\Node\\ImageApiProject\\dist\\utilities\\images\\original\\egypt.jpg"
    );
    expect(result).toBe(true);
  });

  it("Expect getOriginalFullPath Return Right Full Path", function () {
    const image = new Image("egypt");
    expect(image.getOriginalFullPath()).toBe(
      "D:\\Knowledge\\Others\\Node\\ImageApiProject\\dist\\utilities\\images\\original\\egypt.jpg"
    );
  });

  it("Expect getGeneratedFullPath Return Right Generated Full Path", function () {
    const image = new Image("egypt");
    expect(image.getGeneratedFullPath(100, 100)).toBe(
      "D:\\Knowledge\\Others\\Node\\ImageApiProject\\dist\\utilities\\images\\generated\\egypt-100-100.jpg"
    );
  });
});

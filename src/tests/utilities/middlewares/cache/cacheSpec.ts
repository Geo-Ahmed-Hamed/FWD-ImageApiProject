import Cache from "../../../../utilities/middlewares/cache/cache";

describe("Cache Tests", function () {
    it("Expect Not Throw Error When Add to Cache", function () {
      expect(() => Cache.add("test","100","100")).not.toThrow();
    });

    it("Expect Not Throw Error When Check Cache", function () {
        expect(() => Cache.exists("test","100","100")).not.toThrow();
    });

    it("Expect Cache Logic Works", function () {
        Cache.add("test","100","100")
        expect(Cache.exists("test","100","100")).toBe(true);
    });
  });
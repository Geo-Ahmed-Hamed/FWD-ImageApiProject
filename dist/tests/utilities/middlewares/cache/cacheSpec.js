"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cache_1 = __importDefault(require("../../../../utilities/middlewares/cache/cache"));
describe("Cache Tests", function () {
    it("Expect Not Throw Error When Add to Cache", function () {
        expect(function () { return cache_1.default.add("test", "100", "100"); }).not.toThrow();
    });
    it("Expect Not Throw Error When Check Cache", function () {
        expect(function () { return cache_1.default.exists("test", "100", "100"); }).not.toThrow();
    });
    it("Expect Cache Logic Works", function () {
        cache_1.default.add("test", "100", "100");
        expect(cache_1.default.exists("test", "100", "100")).toBe(true);
    });
});

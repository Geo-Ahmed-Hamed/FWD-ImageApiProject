"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cache = /** @class */ (function () {
  function Cache() {}
  Cache.add = function (filename, width, height) {
    Cache.cacheList.add(
      "".concat(filename, "-").concat(width, "-").concat(height)
    );
  };
  Cache.exists = function (filename, width, height) {
    return Cache.cacheList.has(
      "".concat(filename, "-").concat(width, "-").concat(height)
    );
  };
  Cache.cacheList = new Set();
  return Cache;
})();
exports.default = Cache;

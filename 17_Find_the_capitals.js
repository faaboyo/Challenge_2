var capitals = function (word) {
    return word.split('').reduce((acc, char, index) => {
      if (char === char.toUpperCase()) {
        acc.push(index);
      }
      return acc;
    }, []);
  };
  
  const chai = require("chai");
  const assert = chai.assert;
  chai.config.truncateThreshold = 0;
  
  describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.deepEqual(capitals('CodEWaRs'), [0, 3, 4, 6]);
    });
  });
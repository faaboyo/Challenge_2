const flip = (d, a) => {
    return d === 'R' ? a.sort((x, y) => x - y) : a.sort((x, y) => y - x);
  };
  
  const chai = require("chai");
  const assert = chai.assert;
  
  describe("Solution", function() {
    it("fixed tests", function() {
      assert.deepEqual(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
      assert.deepEqual(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
    });
  });
  
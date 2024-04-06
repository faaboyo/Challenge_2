function SeriesSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += 1 / (1 + i * 3);
    }
    return sum.toFixed(2);
  }
  
  const { assert } = require('chai');
  
  describe("Sample tests", () => {
    it("n = 1", () => {
      let actual = SeriesSum(1);
      checkReturnValue(actual);
      assert.strictEqual(actual, "1.00", "n = 1");
    });
    it("n = 2", () => assert.strictEqual(SeriesSum(2), "1.25", "n = 2"));
    it("n = 3", () => assert.strictEqual(SeriesSum(3), "1.39", "n = 3"));
    it("n = 4", () => assert.strictEqual(SeriesSum(4), "1.49", "n = 4"));
  });
  
  function checkReturnValue(actual) {
    assert.isDefined(actual, "Your function did not return a value. Did you log it to console instead?");
  }
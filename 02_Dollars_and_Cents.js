function formatMoney(amount) {
    return '$' + amount.toFixed(2);
  }
  
  const assert = require('chai').assert;
  
  describe("Tests", () => {
    it("test", () => {
      assert.strictEqual(formatMoney(39.99), '$39.99', 'That\'s not formatted the way we expected.');
    });
  });
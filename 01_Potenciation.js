function power(x, y) {
    if (y === 0) {
      return 1; // Si y es igual a 0, retorna 1
    }
    let result = x; // Inicializa el resultado con x
    for (let i = 1; i < y; i++) {
      result *= x; // Multiplica result por x en cada iteración
    }
    return result;
  }
  
  const assert = require('chai').assert;
  
  describe("Tests", function(){
    it("Test 1", function() {
      assert.strictEqual(power(1,701270), 1);
    });
    it("Test 2", function() {
      assert.strictEqual(power(2,2), 4);
    });
    it("Test 3", function() {
      assert.strictEqual(power(3,2), 9);
    });
    it("Test 4", function() {
      assert.strictEqual(power(-1,40), 1);
    });
  });
  
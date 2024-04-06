function getNumberFromString(s) {
    return Number(s.replace(/\D/g, ''));
  }
  
  const Test = require('@codewars/test-compat');
  
  describe("Basic tests", function() {
    it("should work as expected", function() {
      Test.assertSimilar(getNumberFromString("1"), 1);
      Test.assertSimilar(getNumberFromString("123"), 123);
      Test.assertSimilar(getNumberFromString("this is number: 7"), 7);
    });
  });
  
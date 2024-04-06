function flickSwitch(arr){
    let result = [];
    let switchValue = true;
    
    for (let item of arr) {
      if (item === 'flick') {
        switchValue = !switchValue;
      }
      result.push(switchValue);
    }
    
    return result;
  }
  
  const {assert} = require("chai");
  
  describe("Sample tests", function() {
    it("Basic tests", function() {
      assert.deepEqual(flickSwitch(["codewars", "flick", "code", "wars"]), [true, false, false, false]);
      assert.deepEqual(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]), [false, false, false, false]);
      assert.deepEqual(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]), [true, true, false, false, true]);
      assert.deepEqual(flickSwitch(["flick", "flick", "flick", "flick", "flick"]), [false, true, false, true, false]);
      assert.deepEqual(flickSwitch(["john, smith, susan", "flick"]), [true, false]);
      assert.deepEqual(flickSwitch(["bicycle"]), [true]);
      assert.deepEqual(flickSwitch(["flick"]), [false]);
      assert.deepEqual(flickSwitch([]), []);
    });
  });
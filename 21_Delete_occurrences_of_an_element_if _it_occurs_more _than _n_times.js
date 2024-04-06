function deleteNth(arr, n) {
    const occurrences = {};
    const result = [];
    
    for (const num of arr) {
      occurrences[num] = (occurrences[num] || 0) + 1;
      if (occurrences[num] <= n) {
        result.push(num);
      }
    }
    
    return result;
  }
  
  const { assert } = require('chai');
  
  describe("Tests", () => {
    it("test", () => {
      assert.sameOrderedMembers(deleteNth([20,37,20,21], 1), [20,37,21]);
      assert.sameOrderedMembers(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2]);
      assert.sameOrderedMembers(deleteNth([12,39,19,39,39,19,12], 1), [12, 39, 19]);
    });
  });
  
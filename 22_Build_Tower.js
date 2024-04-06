const Test = require('@codewars/test-compat');

function towerBuilder(nFloors) {
  const tower = [];
  const maxWidth = 2 * nFloors - 1;
  
  for (let i = 0; i < nFloors; i++) {
    const spaces = ' '.repeat((maxWidth - (2 * i + 1)) / 2);
    const stars = '*'.repeat(2 * i + 1);
    tower.push(spaces + stars + spaces);
  }
  
  return tower;
}

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(towerBuilder(1), ["*"]);
    Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
    Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
  });
});

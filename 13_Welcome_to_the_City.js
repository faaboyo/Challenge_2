function sayHello(name, city, state) {
    const fullName = name.join(' ');
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
  }
  
  const chai = require("chai");
  const assert = chai.assert;
  chai.config.truncateThreshold=0;
  
  describe("Sample Tests", () => {
    it("Should pass Sample Tests", () => {
      assert.strictEqual(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!')
      assert.strictEqual(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')
      assert.strictEqual(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')
    });
  });
  
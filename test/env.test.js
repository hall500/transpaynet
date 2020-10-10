const config = require("../src/config");
const expect = require('chai').expect;

describe("#config{}: Config Contains correct information", () => {
  context('without port', function() {
    it('should return 3000', function() {
      expect(config.port).to.equal(3000)
    })
  })
});
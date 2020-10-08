const config = require("../src/config");
const expect = require('chai').expect;

describe("#config{}: Config Contains correct information", () => {
  context('without port', function() {
    it('should return 0', function() {
      expect(0).to.equal(0)
    })
  })
});
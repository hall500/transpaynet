const chai = require("chai");
const assert = chai.assert;

chai.use(require("chai-http"));

suite("Functional Tests", () => {
  test("Functional test is working", (done) => {
    setTimeout(() => {
      assert.isOk("Async test !!");
      done();
    }, 500);
  })
});
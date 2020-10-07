const chai = require("chai");
chai.use(require("chai-fs"));
const assert = chai.assert;

suite("Unit Tests:", () => {

  suite("Server Tests", () => {
    test("Tests is working", () => {
      assert.isNull(null, "null is null");
      assert.isNotNull(1, "1 is not null");
    });
  
    test(".env file exists", () => {
      assert.pathExists(process.cwd() + "/.env", ".env file has not been created");
    });
  });

});
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var should = chai.should();

var lightUp = require('../src/lightup').lightUp;

describe('LightUp', function() {
  describe('#lightUp()', function () {
    it('should fulfill promise', function () {
      return lightUp().should.be.fulfilled;
    });
  });
});

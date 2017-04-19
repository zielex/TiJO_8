var expect = require('chai').expect;
var app = require('../app/circle');

describe('Circle', function() {
  it('should have a circumference of 2PI when the radius is 1', function() {
    var radius = 1;
    var expectedCircumference = 2 * Math.PI;
    var circumference = app.getCircumference(radius);

    expect(circumference).to.eql(expectedCircumference);
  });
});

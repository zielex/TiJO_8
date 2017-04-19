var expect = require('chai').expect;
var app = require('../app/add');

describe.skip('add', function ()
{
    it('this test should fail', function ()
    {
        expect(app.add(2, 5)).to.eql(0);
    });
});


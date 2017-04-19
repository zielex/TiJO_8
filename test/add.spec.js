'use strict';

var expect = require('chai').expect;
var app = require('../app/add');

describe('add', function ()
{
    it('should be able to add two numbers', function ()
    {
        expect(app.add(2, 5)).to.eql(7);
    });

    it('should be able 1 to a number', function ()
    {
        expect(app.addOne(2)).to.eql(3);
    });

    it('should be able negate a number', function ()
    {
        expect(app.negate(2)).to.eql(-2);
    });

    it('should be able to recognize a negative number', function ()
    {
        expect(app.isNegativeNumber(-2)).to.eql(true);
    });

    it('should be able to recognize that 0 is not a negative number', function ()
    {
        expect(app.isNegativeNumber(0)).to.eql(false);
    });
});

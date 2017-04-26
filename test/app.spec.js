'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('should return reversed numbers', function () {
        expect(app.reverseNumber(123)).to.eql(321);
    });
});

describe('returnOnlyLetter', function ()
{
    it('should delete all except letters', function(){
        expect(app.returnOnlyLetter('akwari3um')).to.eql('akwarium');
    });
});

describe('isEmail', function ()
{
    it('should return true if email is good or false if is not good', function(){
       expect(app.isEmail('waclaw@gmail.com')).to.eql(true);
    });
});


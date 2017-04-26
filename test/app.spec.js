'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('should return reversed numbers', function () {
        expect(app.reverseNumber(123)).to.eql(321);
    });
    it('should false if not number', function () {
        expect(app.reverseNumber('asa', 1)).to.eql(false);
    });
});

describe('returnOnlyLetter', function ()
{
    it('should delete all except letters', function(){
        expect(app.returnOnlyLetter('akwari3um')).to.eql('akwarium');
    });
    it('it should return false if numbers', function(){
        expect(app.returnOnlyLetter(1231434234)).to.eql(false);
    });
});

describe('isEmail', function ()
{
    it('should return true if email is good or false if is not good', function(){
       expect(app.isEmail('waclaw@gmail.com')).to.eql(true);
    });
    it('should return false if is not good', function(){
        expect(app.isEmail('@ws23.com.gamil')).to.eql(false);
    });
});


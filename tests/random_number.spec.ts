import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../src/randomNumber/random_number';

describe('RandomNumber class function tests', () => {
    let random1 = RandomNumber.getRandomNumber();
    let random2 = RandomNumber.getRandomNumber();
    
    it('It returns the same instance of the object with class RandomNumber', () => {
        expect(random1).to.be.equal(random2);
    });

    it('It has a method to return a random number between 0 and 1', () => {
        // console.log(random1.getRandomNumberZeroOne());
        expect(random1.getRandomNumberZeroOne() >= 0).to.be.true;
        expect(random1.getRandomNumberZeroOne() <= 1).to.be.true;
    });

    it('It has a method to return a random number between two numbers as a float', () => {
        // console.log(random1.getRandomFloatBetween(2, 5));
        expect(random1.getRandomFloatBetween(2, 5) <= 5).to.be.true;
        expect(random1.getRandomFloatBetween(2, 5) >= 2).to.be.true;
    });

    it('It has a method to return a random number between two numbers as a integer', () => {
        // console.log(random1.getRandomIntBetween(6, 10));
        expect(random1.getRandomIntBetween(6, 10) <= 10).to.be.true;
        expect(random1.getRandomIntBetween(6, 10) >= 6).to.be.true;
    });
});
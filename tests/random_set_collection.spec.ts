import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../src/random_number';
import {RandomNumberSetCollection} from '../src/random_set_collection';

describe('RandomSetCollection class function tests', () => {
    let randomSet = new RandomNumberSetCollection(5, 0, 10);
    randomSet.print();
    
    it('It creates a new instance of an object with class Rational', () => {
        expect(randomSet).to.be.instanceOf(RandomNumberSetCollection);
    });

    it('It has a method to get a number of the collection', () => {
        // console.log(randomSet.getNumber(0));
        expect(randomSet.getNumber(0) >= 0).to.be.true;
        expect(randomSet.getNumber(0) <= 10).to.be.true;
    });

    it('It has a method to return the number of elements in the collection', () => {
        // console.log(randomSet.getNumbersInCollection());
        expect(randomSet.getNumbersInCollection()).to.be.equal(5);
    });

    it('It has a method to add a number to the collection', () => {
        randomSet.addNumber(10);
        expect(randomSet.getNumber(5)).to.be.equal(10);
    });
 
    it('It has a method to remove a number of the collection', () => {
        randomSet.removeNumber(10);
        expect(randomSet.getNumber(5)).to.be.undefined;
    });

    it('It has a method to print the collection that uses iterable', () => {
        randomSet.print();
    });
});
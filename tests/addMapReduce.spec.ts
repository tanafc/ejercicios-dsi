import 'mocha';
import {expect} from 'chai';
import {MapReduce} from '../src/mapReduce/mapReduce';
import {AddMapReduce} from '../src/mapReduce/addMapReduce';

describe('AddMapReduce function tests', () => {
  let addMapReduce = new AddMapReduce([1, 2, 3]);

  it('It creates a new instance of an object with class prodMapReduce', () => {
    expect(addMapReduce).to.be.instanceOf(AddMapReduce);
  });

  it('It extends the class MapReduce', () => {
    expect(addMapReduce).to.be.instanceOf(MapReduce);
  });

  it('There is a template method that implements the algorithm', () => {
    let myFunction = function(num: number): number {
        return num += 1;
    }
    expect(addMapReduce.run(myFunction)).to.be.equal(9);
  });
});
import 'mocha';
import {expect} from 'chai';
import {MapReduce} from '../src/mapReduce';
import {ProdMapReduce} from '../src/prodMapReduce';

describe('ProdMapReduce function tests', () => {
  let prodMapReduce = new ProdMapReduce([1, 2, 3]);

  it('It creates a new instance of an object with class prodMapReduce', () => {
    expect(prodMapReduce).to.be.instanceOf(ProdMapReduce);
  });

  it('It extends the class MapReduce', () => {
    expect(prodMapReduce).to.be.instanceOf(MapReduce);
  });

  it('There is a template method that implements the algorithm', () => {
    let myFunction = function(num: number): number {
        return num += 1;
    }
    expect(prodMapReduce.run(myFunction)).to.be.equal(24);
  });
});
import 'mocha';
import {expect} from 'chai';
import {Observable, Observer} from '../src/revista/interfaces';
import {Revista} from '../src/revista/revista';
import {Suscriptor} from '../src/revista/suscriptor';

describe('Revista class function tests', () => {
    let revista1 = new Revista('Hola', 1, ["Hola", "Mundo"]);
    let suscriptor1 = new Suscriptor('Tana', 'alu');
    
    it('It creates a new instance of an object with class Revista', () => {
        expect(revista1).to.be.instanceOf(Revista);
      });
    
      it('There is an atribute for its name', () => {
        expect(revista1.getName()).to.be.equal("Hola");
      });
    
      it('There is an atribute for its number', () => {
        expect(revista1.getNumber()).to.be.equal(1);
      });

      it('There is an atribute for its articles', () => {
        expect(revista1.getArticles()).to.be.eql(["Hola", "Mundo"]);
      });
    
      it('There is a method to suscribe its subscribers', () => {
        revista1.subscribe(suscriptor1);
        expect(revista1.getSubscribers()).to.be.eql([suscriptor1]);
      });

      it('There is a method to unsubscribe its subscribers', () => {
        revista1.unsubscribe(suscriptor1);
        expect(revista1.getSubscribers()).to.be.eql([]);
      });

      it('There is a method to notify its subscribers', () => {
        revista1.subscribe(suscriptor1);
        revista1.notify();
        expect("notify" in revista1).to.be.true;
      });

      it('There is a method to publish a new entry', () => {
        revista1.publish(2, ["Adios", "Mundo"]);
        expect(revista1.getNumber()).to.be.equal(2)
        expect(revista1.getArticles()).to.be.eql(["Adios", "Mundo"]);
      }); 
});
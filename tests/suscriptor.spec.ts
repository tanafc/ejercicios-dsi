import 'mocha';
import {expect} from 'chai';
import {Observable, Observer} from '../src/revista/interfaces';
import {Revista} from '../src/revista/revista';
import {Suscriptor} from '../src/revista/suscriptor';

describe('Suscriptor class function tests', () => {
    let revista1 = new Revista('Hola', 1, ["Hola", "Mundo"]);
    let suscriptor1 = new Suscriptor('Tana', 'alu');
    
    it('It creates a new instance of an object with class Suscriptor', () => {
        expect(suscriptor1).to.be.instanceOf(Suscriptor);
      });
    
      it('There is an atribute for its name', () => {
        expect(suscriptor1.getName()).to.be.equal("Tana");
      });
    
      it('There is an atribute for its email', () => {
        expect(suscriptor1.getEmail()).to.be.equal("alu");
      });

      it('There is a method to update the status when a Revista is published', () => {
        revista1.subscribe(suscriptor1);
        revista1.publish(3, ["Hello", "World"]);
        expect("update" in suscriptor1).to.be.true;
        expect(suscriptor1.update(revista1)).to.be.equal(
            'Soy Tana, un suscriptor de la revista Hola y he observado que ha ' +
            'publicado el número 3 con los artículos Hello,World.'
        )
      });
});
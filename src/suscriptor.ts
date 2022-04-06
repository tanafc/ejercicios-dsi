import {Observable, Observer} from './interfaces';
import {Revista} from './revista';

/**
 * Clase suscriptor implementa métodos de observador
 */
export class Suscriptor implements Observer {
    constructor(private name: string, private email: string) {
    }

    /**
     * Retorna el nombre del suscriptor
     */
    getName(): string {
        return this.name;
    }

    /**
     * Retorna el email del suscriptor
     */
    getEmail(): string {
        return this.email;
    }

    /**
     * Si se ha publicado un nuevo número de revista,
     * da la información de dicha entrega
     * @param observable notificador que informa de un evento
     */
    update(observable: Observable) {
        if (observable instanceof Revista) {
            console.log(`Soy ${this.name}, un suscriptor de la revista ${observable.getName()} ` + 
                        `y he observado que ha publicado el número ${observable.getNumber()} ` + 
                        `con los artículos ${observable.getArticles()}.`);
        }
    }
}
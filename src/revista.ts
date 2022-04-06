import {Observable, Observer} from './interfaces';

/**
 * Clase Revista que notifica a suscriptores cada vez que
 * publica un nuevo número
 */
export class Revista implements Observable {
    private subscribers: Observer[] = [];

    public constructor (private name: string, private number: number,
        private articles: string[]) {
    }

    /**
     * Retorna el nombre de la revista
     */
    getName(): string {
        return this.name;
    }

    /**
     * Retorna el número de la revista
     */
    getNumber(): number {
        return this.number;
    }
    
    /**
     * Retorna los artículos publicados en el número
     * de la revista
     */
    getArticles(): string[] {
        return this.articles;
    }

    /**
     * Retorna los subscriptores de la revista
     */
    getSubscribers(): Observer[] {
        return this.subscribers;
    }

    /**
     * Método de suscripción para suscriptores
     * @param observer el suscriptor a añadir
     */
    subscribe(observer: Observer): void {
        if (this.subscribers.includes(observer)) {
            throw new Error('The observer had already been subscribed');
        } else {
        this.subscribers.push(observer);
        }
    }

    /**
     * Método para desuscribir a un suscriptor
     * @param observer suscriptor a desuscribir
     */
    unsubscribe(observer: Observer): void {
        const index = this.subscribers.indexOf(observer);
        if (index === -1) {
          throw new Error('The observer has not been subscribed');
        } else {
          this.subscribers.splice(index, 1);
        }
    }

    /**
     * Método que notifica a los suscriptores
     */
    notify(): void {
        this.subscribers.forEach((subscriber) => subscriber.update(this));
    }

    /**
     * Método que publica un nuevo número de la revista
     * e informa a los suscriptores
     * @param number número de la revista
     * @param articles artículos del número
     */
    publish(number: number, articles: string[]) {
        this.number = number;
        this.articles = articles;
        this.notify();
    }
}

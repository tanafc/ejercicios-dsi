/**
 * Interfaz Observable que declara métodos a implementar
 * por las clases que pueden ser observadas.
 */
export interface Observable {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
}

/**
 * Interfaz Observer que declara métodos a implementar
 * por las clases que observan.
 */
export interface Observer {
    update(observable: Observable): void;
}
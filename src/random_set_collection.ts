import {RandomNumber} from './random_number';

/**
 * Class that describes a collection of random numbers
 */
export class RandomNumberSetCollection implements Iterable<Number> {
    /** Set of random numbers */
    private randomNumbers: Set<Number>;

    /**
     * The constructor needs the number of elements and the range of the random numbers
     * @param numberOfRandoms number of elements in the collection
     * @param min min range
     * @param max max range
     */
    constructor(numberOfRandoms: number, min: number, max: number) {
        this.randomNumbers = new Set<Number>();
        let random = RandomNumber.getRandomNumber();
        
        for (let i = 0; i < numberOfRandoms; i++) {
            this.randomNumbers.add(random.getRandomIntBetween(min, max))
        }
    }

    /**
     * Gets the number in the index given
     * @param index 
     */
    public getNumber(index: number) {
        return [...this][index];
    }

    /**
     * Gets the number of elements in the collection
     */
    public getNumbersInCollection(): number {
        return this.randomNumbers.size;
    }

    /**
     * Adds a new number to the collection
     * @param number 
     */
    public addNumber(number: number) {
        this.randomNumbers.add(number);
    }

    /**
     * Removes a number from the collection
     * @param number 
     */
    public removeNumber(number: number) {
        this.randomNumbers.delete(number);
    }

    /**
     * Symbol.iterator for the class to be iterable
     */
    [Symbol.iterator](): Iterator<Number> {
        return this.randomNumbers.values();
    }

    /**
     * Prints the collection of numbers
     */
    public print() {
        [...this].forEach((number) => {
            console.log(number);
        });
    }
}
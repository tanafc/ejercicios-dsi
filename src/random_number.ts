/**
 * Singleton class to represent random numbers
 */
export class RandomNumber {
    private static randomNumber: RandomNumber;

    private constructor() {
    }

    /**
     * Gets the instance of the class RandomNumber
     */
    public static getRandomNumber() {
        if (!RandomNumber.randomNumber) {
            RandomNumber.randomNumber = new RandomNumber();
        }
        return RandomNumber.randomNumber;
    }

    /**
     * Gets a random number between 0 and 1
     */
    public getRandomNumberZeroOne() {
        return Math.random();
    }

    /**
     * Gets a random number as float between n and m
     * @param n min in range
     * @param m max in range
     */
    public getRandomFloatBetween(n: number, m: number) {
        return Math.random() * (m - n) + n;
    }

    /**
     * Gets a random number as integer between n and m
     * @param n min in range
     * @param m max in range
     */
    public getRandomIntBetween(n: number, m: number) {
        return Math.floor(Math.random() * (m - n)) + n;
    }

}
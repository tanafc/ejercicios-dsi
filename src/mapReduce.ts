/**
 * Abstract class that defines a template method for subclasses
 */
export abstract class MapReduce {
    constructor(protected numArray: number[]) {}

    /** Hook methods */
    protected beforeMap(): string { return '' }
    protected beforeReduce(): string { return '' }
    protected afterReduce(): string { return '' }

    /** Functions that subclasses can overwrite */
    public myMap(myFunction: (num: number) => number) {
        let newNumArray: number[] = []
        this.numArray.forEach(num => {
            let newNum = num;
            newNumArray.push(myFunction(newNum));
        });
        return newNumArray;
    }

    /**
     * Template Method of our class
     */
    public run(functionMap: (num: number) => number): number {
        this.beforeMap();
        
        // First critical operation
        let newArray = this.myMap(functionMap);

        this.beforeReduce();

        // Second critical operation
        let result = this.myReduce(newArray);

        this.afterReduce();

        return result
    }

    /** Functions to implement by subclasses */
    protected abstract myReduce(array: number[]): number;
}
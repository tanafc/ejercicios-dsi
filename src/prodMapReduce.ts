import {MapReduce} from './mapReduce';

/**
 * Class that extends MapReduce and implements methods for
 * the algorithm
 */
export class ProdMapReduce extends MapReduce {
    constructor(protected numArray: number[]) {
        super(numArray);
    }

    /** Overwriting a hook method */
    protected beforeMap(): string {
        console.log('Implementing Map from prodMapReduce');
        return 'Implementing Map from prodMapReduce';
    }

    /**
     * Implementing myReduce from superclass MapReduce
     * @param array array to reduce
     */
    protected myReduce(array: number[]): number {
        let reducedArray: number = 1;
        array.forEach(number => {
            reducedArray *= number;
        });
        return reducedArray;
    }
}
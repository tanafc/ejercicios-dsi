import {MapReduce} from './mapReduce';

/**
 * Class that extends MapReduce and implements methods for
 * the algorithm
 */
export class AddMapReduce extends MapReduce {
    constructor(protected numArray: number[]) {
        super(numArray);
    }

    /** Overwriting a hook method */
    protected beforeMap(): string {
        console.log('Implementing Map from AddMapReduce');
        return 'Implementing Map from AddMapReduce';
    }

    /**
     * Implementing myReduce from superclass MapReduce
     * @param array array to reduce
     */
    protected myReduce(array: number[]): number {
        let reducedArray: number = 0;
        array.forEach(number => {
            reducedArray += number;
        });
        return reducedArray;
    }
}
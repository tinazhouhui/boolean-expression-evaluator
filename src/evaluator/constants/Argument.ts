import {Constant} from './Constant';

export class Argument extends Constant {
    constructor(value: boolean, private readonly name: string) {
        super(value);
    }

    getName () {
        return this.name
    }

    toString(): string {
        return this.name + ': ' + super.toString();
    }
}

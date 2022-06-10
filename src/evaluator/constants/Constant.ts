import {Node} from '../Node';
import ConstantComp from '../../components/constants/ConstantComp'

export class Constant extends Node {
    constructor(protected readonly value: boolean | undefined) {
        super();
    }
    evaluate () {
        if (this.value) return this.value;
        throw new Error ('please select all properties')
    }

    toString(): string {
        return this.value ? 'true': 'false';
    }

    createComponent(): JSX.Element {
        return ConstantComp(this.value)
    }
}

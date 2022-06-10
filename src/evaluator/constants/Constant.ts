import {Node} from '../Node';
import ConstantComp from '../../components/constants/ConstantComp'
import AddNode from '../../components/AddNode';

export class Constant extends Node {
    constructor(protected readonly value: boolean | undefined) {
        super();
    }
    evaluate () {
        if (this.value !== undefined) return this.value;
        throw new Error ('please select all properties')
    }

    toString(): string {
        if (this.value !== undefined) return this.value ? 'true': 'false';
        throw new Error ('please select all properties')
    }

    createComponent(): JSX.Element {
        if (this.value !== undefined) return ConstantComp(this.value)
        return AddNode()
    }
}

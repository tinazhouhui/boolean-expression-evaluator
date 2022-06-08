export abstract class Node {
    evaluate (): boolean {
        throw new Error('Implement me')
    }

    toString(): string {
        throw new Error('Implement me')
    }

    createComponent(): JSX.Element {
        throw new Error('Implement me')
    }
}

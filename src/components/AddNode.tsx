import React from 'react';

interface IProps {
    handleNew: (nodeType: string) => void
}

function AddNode(props: IProps) {
    const {handleNew} = props;
    return (
        <div>
            <button onClick={() => {
                handleNew('constant');
            }}>Add constant
            </button>
            <button onClick={() => {
                handleNew('argument');
            }}>Add argument
            </button>
            <button onClick={() => {
                handleNew('operation');
            }}>Add operation
            </button>
        </div>
    );
}

export default AddNode;

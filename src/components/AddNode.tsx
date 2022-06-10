import React, {useState} from 'react';

interface IProps {

}

function AddNode(props: IProps) {
    const selector = (
        <>
            <button onClick={() => setIsFolded(false)}>x</button>
            <select>
                <option>Constant</option>
                <option>Argument</option>
                <option>And</option>
                <option>Or</option>
            </select>
        </>
    )

    const [isFolded, setIsFolded] = useState(false)

    return (
        <div style={{display: 'inline'}}>
            {isFolded ? selector :
                <button onClick={() => setIsFolded(true)}>+</button>}
        </div>
    );
}

export default AddNode;

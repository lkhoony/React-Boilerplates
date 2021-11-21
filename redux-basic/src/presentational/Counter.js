import React from 'react';

const Counter = (props) => {

    const {number, increment, decrement} = props;

    return(
        <div>
            <button onClick={increment}>increment</button>
            <div>{number}</div>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default Counter;
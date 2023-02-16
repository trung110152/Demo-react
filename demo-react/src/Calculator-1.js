import React, { useState } from 'react';
function Calculator1() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);
    return (
        <>
            <h1>{z}</h1>
            <input type="number" value={x} onChange={(e) => {setX(e.target.value*1)}}/>
            <input type="number" value={y} onChange={(e) => {setY(e.target.value*1)}}/>
            <button onClick={Swap}>Swap</button>
            <br/>
            <button onClick={Divide}>/</button>
            <button onClick={Multi}>*</button>
            <button onClick={Minus}>-</button>
            <button onClick={Plus}>+</button>
        </>
    )
    function Swap() {
        return (
            setX(y), setY(x)
        )
    }
    function Plus() {
        return (
            setZ(x+y)
        )
    }
    function Minus() {
        return (
            setZ(x-y)
        )
    }
    function Multi() {
        return (
            setZ(x*y)
        )
    }
    function Divide() {
        return (
            setZ(x/y)
        )
    }
}

export default Calculator1;
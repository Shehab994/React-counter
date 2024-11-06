import React, { useState } from 'react'

import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0);
    const counterDec = () => {
        if (count < 2) {
            alert('Count value is less then 1 !')
        } else {
            setCount(count - 1)
        }
    }
    const counterInc = () => {
        setCount(count + 1)
    }
    return (
        <>
            <div className="container">
                <div className="counter-box">
                    <button onClick={counterDec}>-</button>
                    <div className="count">{count}</div>
                    <button onClick={counterInc}>+</button>
                </div>
            </div>
        </>
    )
}

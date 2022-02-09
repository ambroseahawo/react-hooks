import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [value, setValue] = useState(0)

    const handleIncrease = () => {
        setValue(value + 1)
    }

    const handleDecrease = () => {
        if (value < 1) {
            setValue(0)
        }else {
            setValue(value - 1)
        }
    }

    const handleReset = () => {
        setValue(0)
    }
    return (
        <React.Fragment>
            <h2>React State Example 1 - Counter</h2>
            <div className="inner-content">
                <h1>{value}</h1>
                <div className="buttons">
                    <button onClick={handleIncrease} >increase</button>
                    <button onClick={handleDecrease} >Decrease</button>
                    <button onClick={handleReset} >Reset</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Counter

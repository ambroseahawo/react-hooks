import React, { useEffect, useState } from 'react'

const WindowResize = () => {
    const [size, setSize] = useState(window.innerWidth)

    // function to track window size
    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log("useEffect Entry")
        window.addEventListener("resize", checkSize)
        return () => {
            console.log("cleanup")
            window.removeEventListener("resize", checkSize)
        }
    }, [size])

    return (
        <div>
            <h1>Window size: { size } PX</h1>
        </div>
    )
}

export default WindowResize

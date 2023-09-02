import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
export default function Users({ out }) {
    const [out1, setOut1] = useState(out)
    function Dell(index) {
        const dellUser = [...out]
        dellUser.splice(index, 1)
        setOut1(dellUser)
    }
    return (
        out.map((item, index) => (
            <>
                <div>
                    <h3 key={item.id}>{item.name}</h3>
                    <button onClick={() => Dell(index)}>X</button>
                </div>
            </>
        ))
    )
}
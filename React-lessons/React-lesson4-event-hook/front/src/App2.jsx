import React, { useState } from 'react'
import Users from './Users'
// import ReactDOM from 'react-dom/client';
export default function App() {
    const users = [
        { id: 1, name: 'Bob', age: 22 },
        { id: 2, name: 'Kate', age: 12 },
        { id: 3, name: 'Helen', age: 42 },
    ]
    const users2 = [
        { id: 1, name: 'Bob2', age: 22 },
        { id: 2, name: 'Kate2', age: 12 },
        { id: 3, name: 'Helen2', age: 42 },
    ]
    const inp = React.createRef()
    const [out1, setOut] = useState('user')
    const [out2, setOut2] = useState(users)

    function newUser() {
        setOut(inp.current.value)
    }
    function showNewUsers() {
        setOut2([...out2, {
            id: 1, name: inp.current.value, age: 22
        }])
    }
    return (
        <div>
            <h2>Hook</h2>
            <input type="text" ref={inp} />
            <button onClick={() => newUser()}>Add</button>
            <button onClick={() => showNewUsers()}>New Users</button>
            <div>{out1}</div>
            <Users item={out2} />
        </div>
    );
}
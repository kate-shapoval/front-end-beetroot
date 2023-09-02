import { useState } from "react";
import { useRef } from "react";
import React from "react";
export default function App() {
    const arr = ["Sasha", "Sveta", "Olya", "Dima"];
    const inp = React.createRef()
    const [out1, setOut1] = useState(arr[0]);
    const [out2, setOut2] = useState(arr);
    function showLast(list) {
        setOut1(list[list.length - 1])
    }
    function searchByName() {
        // const result = arr.find(item => item === inp.current.value)
        // setOut2(`Name: ${result ? result : 'нема такого імені'}`)
        let result = arr.filter(item => item.toLowerCase().indexOf(inp.current.value.toLowerCase()) >= 0)
        //setOut2(`Name: ${result ? result.join(', ') : 'нема такого імені'}`)
        setOut2(result.length ? result : ['нема такого імені'])
    }

    return (
        <>
            <h2>Вивести останього</h2>
            <div>Name: {out1}</div>
            <button onClick={() => showLast(arr)}>Show last</button>
            <hr />
            <h2>Пошук</h2>
            <input type="text" onInput={() => searchByName()} ref={inp} />
            <div>{
                out2.map(item => (item))

            }</div>
            {/* <button onClick={() => searchByName()}>Search</button> */}
        </>
    );
}
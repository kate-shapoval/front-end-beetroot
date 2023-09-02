import React from 'react';
// import ReactDOM from 'react-dom/client';
export default function App() {
  const out = React.createRef()
  const inp = React.createRef()
  function testClick(item) {
    console.log('test')
    out.current.innerHTML += 'Test'
  }
  let a = 0
  function changeInp() {
    console.log(out)
    out.current.innerHTML = inp.current.value
  }
  return (
    <div>
      <h2>Old version</h2>
      <input type="text" onInput={changeInp} ref={inp} />
      <button onClick={() => testClick('Kate')}>Add</button>
      <div ref={out}></div>
    </div>
  );
}

import { useState } from "react";
export default function App() {
  // Виводимо результат і out useState
  return (
    <div className="App">
      <h2>Додавання</h2>
      <input type="text" />
      <input type="text" />
      <button>result</button>

      <h2>Ціна</h2>
      <div className="div">
        <input type="text" />
        <select>
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <input type="text" />
      </div>

      <button>result</button>

      {/*Result*/}
      <div></div>
    </div>
  )
}

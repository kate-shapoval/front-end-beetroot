import React from 'react';
import ReactDOM from 'react-dom/client';
import User from './components/User';

import Button from './components/Button.jsx'
// import ButtonProps from './components/ButtonProps.jsx'
//import User from './components/User'
const root = ReactDOM.createRoot(document.getElementById('root'));

const Users = {
  name: "Kate",
  age: 32
}

root.render(
  <>
    <h1>H1</h1>
    <User item={Users} >
      <Button name={"Click"} className={"active"} />
    </User>
    {/* <Button name={"Click"} className={"active"} />
    <br />
    <ButtonProps name={"Click Props"} className={"active"} /> */}
  </>
);


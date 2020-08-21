import React from 'react';
import ReactDOM from 'react-dom';
import Work from './components/work.jsx';


const App = function () {
  const type = "user";
  const obj = { value: 100 };
  console.log(obj);
  return <div>

    <Work type={type} id="4" />
    <Work type="record" id="4" />
    <Work type="log" allowWrite obj={obj}/>
    <Work type="log" allowWrite={false} obj={obj}/>
    <Work obj={obj} />
  </div>
}
ReactDOM.render(
  <App />, document.querySelector('#root')
);
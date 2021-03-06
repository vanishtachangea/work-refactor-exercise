import React from 'react';
import ReactDOM from 'react-dom';
import Work from './components/work.jsx';


export const App = function () {
  const type = "user";
  const obj = { value: 100 };
  console.log({ obj });
  return <div>

    {/*     <Work type={type} id="4" obj={obj}/>
    */}
    {/*    
    
    <Work type="x" obj={obj}/>  
    <Work obj={obj}/>
     
    */}
    <Work type="record" id="4" />
    <Work type={type} id="4" obj={obj}/>
    <Work type="log" allowWrite obj={obj}/>
    <Work type="log" allowWrite={false} obj={obj}/> 
  </div>
}

ReactDOM.render(
  <App />, document.querySelector('#root')
);

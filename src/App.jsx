import React from 'react'
import Accordions from './Accordions';
import sdata from './Sdata';
export default function App() {
  return (
    <>
      <div className="main">
      
        <div className="center_div">
        <h1>Question</h1>
          <Accordions />
          {sdata.map((val) => {
            return <Accordions key={val.id} id={val.id} ans={val.ans} que={val.que} />;
          })}
        </div>
      </div>
    </>
  )
}

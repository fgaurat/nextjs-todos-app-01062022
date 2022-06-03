
import React from 'react'
import { useDebugValue } from 'react';
import { useState } from 'react'

function Counter({initialValue}:any) {

  const [count, setCount] = useState(initialValue)

  return (
    <div>
        <h2>UseState</h2>
        {count}<br/>
        <button onClick = {e => setCount(count+1)}>inc</button>

    </div>
  )
}


export async function getStaticProps() {
  return {
    props: {
      initialValue:10,
    },
  };
}

export default Counter
// import something  from some library
import React from 'react'

// import something  from some location
// compB import as child from CompB 

import Child from "./CompB"
// fun() defintion and fun () export as name
export const CompA = () => {
  return (
    <div>Component A present
        <Child/>
    </div>
  )
}


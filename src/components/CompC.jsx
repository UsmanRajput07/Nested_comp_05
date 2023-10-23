// import something  from some library
import React from 'react'

// import something  from some location
import { CompD } from './CompD'
const CompC = () => {
  return (
    <>this is another child of comp B
        {/* another child component */}
    <CompD/>
    </>
  )
}
export default CompC;

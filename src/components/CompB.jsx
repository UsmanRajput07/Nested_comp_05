// import something  from some library
import React from 'react'

// import something  from some location
import CompC from './CompC';
// fun() defination area
const CompB = () => {
  return (
    <React.Fragment>
      this is child component of comp A
        {/* import CompC  */}
        <CompC/>
     </React.Fragment>
  )
}
// export component from dafault name
export default CompB;
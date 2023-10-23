// import something  from some library
import React from 'react'
// import something  from some location
import LastChild from "./CompE"

// export fun as a name comp
export const CompD = () => {
  return (
    <React.Fragment>this is component D
        {/* last child comp */}
        <LastChild/>
    </React.Fragment>
  )
}

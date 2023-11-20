import React, { useState } from 'react'

function Panel({letter, color}) {

    const [state, setState] = useState(true);
    
    let styles ={
        backgroundColor: `${color}`
    }
  return (
    <div className={state? "panel" : "panel panelMove"} style={styles} onClick={() => {setState(!state)}}>
        <h3>{letter}</h3>
    </div>
  )
}

export default Panel
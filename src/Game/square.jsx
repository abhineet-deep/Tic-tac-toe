import React from 'react'

const square = function (props) {
  return (
    <div className='square' style={{
        border : "2px solid",
        height: "100px", 
        width: "100%", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <h5>{props.value}</h5>
    </div>
  )
}

export default square;

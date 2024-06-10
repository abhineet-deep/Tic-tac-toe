import React, { useState }  from 'react'
import Square from './square'


const board = () => {

    const [state,setState] = useState(Array(9).fill(null));

  return (
    <div className='board-container'>
        <div className='board-row'>
            <Square value = {state[0]}/>
            <Square value = {state[1]}/>
            <Square value = {state[2]}/>
        </div>
        <div className='board-row'>
            <Square value = {state[3]}/>
            <Square value = {state[4]}/>
            <Square value = {state[5]}/>
        </div>
        <div className='board-row'>
            <Square value = {state[6]}/>
            <Square value = {state[7]}/>
            <Square value = {state[8]}/>
        </div>
    </div>
    
  )
}

export default board;

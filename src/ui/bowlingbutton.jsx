import React from 'react'

const Bowlbut = (props) => {
    return (
        <div>
            <button style={{ margin: '10px' }} onClick={props.handlebutton}>{props.input}</button>
        </div>)
}

export default Bowlbut;
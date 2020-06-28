import React from 'react'

const Bowlval = (props) => {
    return (
        <React.Fragment>
            <div>
                <label style={{ margin: '10px' }}><b>Strike {props.strikecount}</b></label>
            </div>
            <div>
                <select style={{ margin: '10px', width: '10%' }} onChange={props.handleChange}>
                    {props.elementval}
                </select>
            </div>
        </React.Fragment>)
}

export default Bowlval;
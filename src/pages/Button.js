import React from 'react'

function Button(props) {
    return <button className='btn btn-primary me-2' onClick={props.eventHandler}>{props.children}</button>
}
export default Button;
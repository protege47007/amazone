import React from 'react'

function Button(props) {
    const {type, name, styleName} = props;
    return (
        <button type={type} className={styleName}>{name}</button>
    )
}

export default Button

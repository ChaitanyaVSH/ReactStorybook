import React from "react";
import "./Input.css";

const Input = (props) => {

    const { variant = "primary", children, ...rest} = props;

    return(
        <input className={`input ${variant}`} {...rest} placeholder={children}></input>
    );
}

export default Input;

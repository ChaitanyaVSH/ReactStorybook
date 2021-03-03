import React from "react";
import "./ListItem.css";

function ListItem(props) {

    const {variant, children, ...rest} = props;

    return (
        <span className="listitem">
            <span className={`${variant}`}></span>
            <li {...rest}>{children}</li>
        </span>
    )
}

export default ListItem;

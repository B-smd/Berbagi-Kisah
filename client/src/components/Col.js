import React from "react";

function Col(props) {
    return <div className="col, col-sm-6">{props.children}</div>;
}

export default Col;
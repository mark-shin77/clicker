import React from "react";
import "./Wrapper.css";

const Wrapper = props => {
    return (
        <div className="wrapper">
            <div className="game-board">
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper;
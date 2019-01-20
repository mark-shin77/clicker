import React from "react";
import "./Content.css"

const Content = props => {
    return (
        <div className="game-board">
            {props.children}
        </div>
    )
}

export default Content;
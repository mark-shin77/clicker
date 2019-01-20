import React from 'react';
import "./Header.css"

const Header = props => {
    return (
        <div className="header">
            <div className="row">
                <div className="col-4">
                    <div className="title">Clicky Game</div>
                </div>
                <div className="col-4">
                    <div className="notification">{props.rightWrong}</div>
                </div>
                <div className="col-2 scores">
                        Score: {props.score}
                </div>
                <div className="col-2 scores">
                        Highscore: {props.highscore}
                </div>
            </div>
        </div>
    )
}

export default Header;
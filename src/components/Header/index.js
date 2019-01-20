import React from 'react';
import "./Header.css"

const Header = props => {
    return (
        <div className="header">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <div className="title">Clicky Game</div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="notification">{props.rightWrong}</div>
                </div>
                <div className="col-lg-2 col-sm-6 scores">
                        Score: {props.score}
                </div>
                <div className="col-lg-2 col-sm-6 scores">
                        Highscore: {props.highscore}
                </div>
            </div>
        </div>
    )
}

export default Header;
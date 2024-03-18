import React from "react";
import './Nav.scss';

class Nav extends React.Component {

    render() {
        return (
            <div className="topnav">
                <a className="active" href="/Home">Home</a>
                <a href="/Todos">News</a>
                <a href="/About">Contact</a>
            </div>
        )
    }

}

export default Nav;
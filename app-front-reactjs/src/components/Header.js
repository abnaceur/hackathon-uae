import React, {Component} from "react";
import Awesomplete from "awesomplete";
import {Redirect, Link, Route, Switch} from "react-router-dom";
import axios from "axios/index";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let myStyle = {
            float:'right'
        };

        return (
            <nav className="navbar navbar-inverse">
                <div className="navbar-header">
                    <b className="nav-text">KHADAMATI</b> <i className="ai-1">AI</i>
                </div>
                <ul>
                    <li style={myStyle}>
                        <Link to="/dashboard">
                            <button className="btn btn-custom2 btn-info dash-1">Dashboard</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
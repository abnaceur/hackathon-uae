import React, {Component} from "react";
import Awesomplete from "awesomplete";
import {Redirect, Link, Route, Switch} from "react-router-dom";
import axios from "axios/index";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="navbar-header">
                    <b className="nav-text">KHADAMATI</b> <i className="ai-1">AI</i>
                </div>
            </nav>
        );
    }
}

export default Header;
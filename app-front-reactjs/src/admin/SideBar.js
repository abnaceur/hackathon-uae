
import React, {Component} from "react";
import {Redirect, Link, Route, Switch} from "react-router-dom";
import Header from './Header';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="main-sidebar">

                <section className="sidebar">
                    <form action="#" method="get" class="sidebar-form">
                        <div class="input-group">
                            <input type="text" name="q" class="form-control" placeholder="Search..."/>
          <span class="input-group-btn">
              <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
              </button>
            </span>
                        </div>
                    </form>
                    <ul class="sidebar-menu" data-widget="tree">
                        <li className="header">All options</li>
                        <li className="active">
                            <Link to="/"><i className="fa fa-link"></i> <span>Dashboard</span></Link>
                        </li>
                        <li>
                            <Link to="/service"><i class="fa fa-link"></i> <span>Services</span></Link>
                        </li>
                        <li >
                            <Link to="/translator"><i className="fa fa-link"></i> <span>Translator</span></Link>
                        </li>

                        <li>
                            <Link to="/phraseAnalytics"><i className="fa fa-link"></i> <span>Phrase sentiment analytics</span></Link>
                        </li>
                        <li >
                            <a href="http://app.khadamati-ai.local:8010/captcha/index/"><i className="fa fa-link"></i> <span>Captcha</span></a>
                        </li>
                        <li >
                            <a href="http://app.khadamati-ai.local:8010/home"><i className="fa fa-link"></i> <span>Collaborative dictionnary</span></a>
                        </li>
                        <li >
                            <a href="/game"><i className="fa fa-link"></i> <span>Game</span></a>
                        </li>

                    </ul>
                </section>
            </aside>
        );
    }
}

export default Sidebar;
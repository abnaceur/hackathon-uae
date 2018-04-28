import  React, { Component } from "react";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import { router, route, Browserhistory } from "react-router";
import Home from "./components/Home";
import Dashboard from './admin/Dashbaord';
import Services from './admin/Services';
import PhraseAnalytics from "./admin/PhraseAnalytics";

class App extends Component {
    render() {
        return (
            <div className="row">
                <Switch>
                    <Route exact path="/translator" component={Home} />
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/service" component={Services} />
                    <Route exact path="/phraseAnalytics" component={PhraseAnalytics} />
                </Switch>
            </div>
        );
    }
}

export default App; 
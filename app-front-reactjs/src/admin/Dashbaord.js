
import React, {Component} from "react";
import Header from './Header';
import Sidebar from './SideBar';
import Charts from './Charts';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Header />
                <Sidebar />
                <Charts />
            </div>
        );
    }
}

export default Dashboard;
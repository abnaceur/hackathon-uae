
import React, {Component} from "react";
import Header from './Header';
import Sidebar from './SideBar';
import Charts from './Charts';
import Widget from './Widjet';
import axios from 'axios';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount () {

    }

    render() {

        return (
            <div>
                <Header />
                <Sidebar />
                <Widget />
                <div className="box">
                    <div className="box-header">
                        <h3 className="box-title">Condensed Full Width Table</h3>
                    </div>
                    <div className="box-body no-padding">
                        <table className="table table-condensed">
                            <tr>
                                <th style="width: 10px">#</th>
                                <th>Task</th>
                                <th>Progress</th>
                                <th style="width: 40px">Label</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>Update software</td>
                                <td>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar progress-bar-danger" style="width: 55%"></div>
                                    </div>
                                </td>
                                <td><span className="badge bg-red">55%</span></td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Clean database</td>
                                <td>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar progress-bar-yellow" style="width: 70%"></div>
                                    </div>
                                </td>
                                <td><span className="badge bg-yellow">70%</span></td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>Cron job running</td>
                                <td>
                                    <div className="progress progress-xs progress-striped active">
                                        <div className="progress-bar progress-bar-primary" style="width: 30%"></div>
                                    </div>
                                </td>
                                <td><span className="badge bg-light-blue">30%</span></td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>Fix and squish bugs</td>
                                <td>
                                    <div className="progress progress-xs progress-striped active">
                                        <div className="progress-bar progress-bar-success" style="width: 90%"></div>
                                    </div>
                                </td>
                                <td><span className="badge bg-green">90%</span></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
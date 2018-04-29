
import React, {Component} from "react";
import Header from './Header';
import Sidebar from './SideBar';
import Charts from './Charts';
import Widget from './Widjet';
import axios from 'axios';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);


        this.handleStyle = this.handleStyle.bind(this);
    }

    handleStyle (value) {

        let style = {
            width : value
        }

        return style;
    }

    render() {

        return (
            <div>
                <Header />
                <Sidebar />
                <Widget />


                <div className="container col-md-10 col-md-offset-2">
                    <div className="box">
                        <div className="box-header">
                            <h3 className="box-title">Entities</h3>

                            <div className="box-tools">
                                <ul className="pagination pagination-sm no-margin pull-right">
                                    <li><a href="#">&laquo;</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">&raquo;</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="box-body no-padding">
                            <table className="table">
                                <tr>
                                    <th style={this.handleStyle(40)}>#</th>
                                    <th>Name</th>
                                    <th>Analytics</th>
                                    <th style={this.handleStyle(40)}>Feedback</th>
                                </tr>
                                <tr>
                                    <td>1.</td>
                                    <td>Update software</td>
                                    <td>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar progress-bar-danger" style={this.handleStyle(50)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-red">55%</span></td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>Clean database</td>
                                    <td>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar progress-bar-yellow" style={this.handleStyle(70)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-yellow">70%</span></td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>Cron job running</td>
                                    <td>
                                        <div className="progress progress-xs progress-striped active">
                                            <div className="progress-bar progress-bar-primary" style={this.handleStyle(30)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-light-blue">30%</span></td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>Fix and squish bugs</td>
                                    <td>
                                        <div className="progress progress-xs progress-striped active">
                                            <div className="progress-bar progress-bar-success" style={this.handleStyle(90)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-green">90%</span></td>
                                </tr>
                            </table>
                        </div>
                    </div>


                    <div className="box">
                        <div className="box-header">
                            <h3 className="box-title">Main services</h3>

                            <div className="box-tools">
                                <ul className="pagination pagination-sm no-margin pull-right">
                                    <li><a href="#">&laquo;</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">&raquo;</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="box-body no-padding">
                            <table className="table">
                                <tr>
                                    <th style={this.handleStyle(40)}>#</th>
                                    <th>Name</th>
                                    <th>Analytics</th>
                                    <th style={this.handleStyle(40)}>Feedback</th>
                                </tr>
                                <tr>
                                    <td>1.</td>
                                    <td>Update software</td>
                                    <td>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar progress-bar-danger" style={this.handleStyle(50)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-red">55%</span></td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>Clean database</td>
                                    <td>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar progress-bar-yellow" style={this.handleStyle(70)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-yellow">70%</span></td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>Cron job running</td>
                                    <td>
                                        <div className="progress progress-xs progress-striped active">
                                            <div className="progress-bar progress-bar-primary" style={this.handleStyle(30)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-light-blue">30%</span></td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>Fix and squish bugs</td>
                                    <td>
                                        <div className="progress progress-xs progress-striped active">
                                            <div className="progress-bar progress-bar-success" style={this.handleStyle(90)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-green">90%</span></td>
                                </tr>
                            </table>
                        </div>
                    </div>


                    <div className="box">
                        <div className="box-header">
                            <h3 className="box-title">Service center</h3>

                            <div className="box-tools">
                                <ul className="pagination pagination-sm no-margin pull-right">
                                    <li><a href="#">&laquo;</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">&raquo;</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="box-body no-padding">
                            <table className="table">
                                <tr>
                                    <th style={this.handleStyle(40)}>#</th>
                                    <th>Name</th>
                                    <th>Analytics</th>
                                    <th style={this.handleStyle(40)}>Feedback</th>
                                </tr>
                                <tr>
                                    <td>1.</td>
                                    <td>Update software</td>
                                    <td>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar progress-bar-danger" style={this.handleStyle(50)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-red">55%</span></td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>Clean database</td>
                                    <td>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar progress-bar-yellow" style={this.handleStyle(70)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-yellow">70%</span></td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>Cron job running</td>
                                    <td>
                                        <div className="progress progress-xs progress-striped active">
                                            <div className="progress-bar progress-bar-primary" style={this.handleStyle(30)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-light-blue">30%</span></td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>Fix and squish bugs</td>
                                    <td>
                                        <div className="progress progress-xs progress-striped active">
                                            <div className="progress-bar progress-bar-success" style={this.handleStyle(90)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-green">90%</span></td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="box">
                        <div className="box-header">
                            <h3 className="box-title">Sub services</h3>

                            <div className="box-tools">
                                <ul className="pagination pagination-sm no-margin pull-right">
                                    <li><a href="#">&laquo;</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">&raquo;</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="box-body no-padding">
                            <table className="table">
                                <tr>
                                    <th style={this.handleStyle(40)}>#</th>
                                    <th>Name</th>
                                    <th>Analytics</th>
                                    <th style={this.handleStyle(40)}>Feedback</th>
                                </tr>
                                <tr>
                                    <td>1.</td>
                                    <td>Update software</td>
                                    <td>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar progress-bar-danger" style={this.handleStyle(50)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-red">55%</span></td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>Clean database</td>
                                    <td>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar progress-bar-yellow" style={this.handleStyle(70)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-yellow">70%</span></td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>Cron job running</td>
                                    <td>
                                        <div className="progress progress-xs progress-striped active">
                                            <div className="progress-bar progress-bar-primary" style={this.handleStyle(30)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-light-blue">30%</span></td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>Fix and squish bugs</td>
                                    <td>
                                        <div className="progress progress-xs progress-striped active">
                                            <div className="progress-bar progress-bar-success" style={this.handleStyle(90)}></div>
                                        </div>
                                    </td>
                                    <td><span className="badge bg-green">90%</span></td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default Dashboard;
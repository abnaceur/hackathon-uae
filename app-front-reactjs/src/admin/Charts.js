
import React, {Component} from "react";
import Header from './Header';
import Sidebar from './SideBar';

class Charts extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        let myStyle = {
            height:'250px'
        }


        return (
                <div className="container">
                    <div className="col-md-6">
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">Main services</h3>

                                <div className="box-tools pull-right">
                                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i
                                        className="fa fa-minus"></i>
                                    </button>
                                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i
                                        className="fa fa-times"></i></button>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="chart">
                                    <canvas id="areaChart" style={myStyle}></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="box box-danger">
                            <div className="box-header with-border">
                                <h3 className="box-title">Feedbacks</h3>

                                <div className="box-tools pull-right">
                                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i
                                        className="fa fa-minus"></i>
                                    </button>
                                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i
                                        className="fa fa-times"></i></button>
                                </div>
                            </div>
                            <div className="box-body">
                                <canvas id="pieChart" style={myStyle}></canvas>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="box box-info">
                            <div className="box-header with-border">
                                <h3 className="box-title">Sub services</h3>

                                <div className="box-tools pull-right">
                                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i
                                        className="fa fa-minus"></i>
                                    </button>
                                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i
                                        className="fa fa-times"></i></button>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="chart">
                                    <canvas id="lineChart" style={myStyle}></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="box box-success">
                            <div className="box-header with-border">
                                <h3 className="box-title">Progress</h3>

                                <div className="box-tools pull-right">
                                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i
                                        className="fa fa-minus"></i>
                                    </button>
                                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i
                                        className="fa fa-times"></i></button>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="chart">
                                    <canvas id="barChart" style={myStyle}></canvas>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        );
    }
}

export default Charts;
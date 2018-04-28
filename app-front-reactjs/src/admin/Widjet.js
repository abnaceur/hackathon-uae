
import React, {Component} from "react";
import Header from './Header';
import Sidebar from './SideBar';

class Widget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="col-md-10 col-md-offset-2">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-aqua"><i className="fa fa-puzzle-piece"></i></span>

                            <div className="info-box-content">
                                <span className="info-box-text">Entities</span>
                                <span className="info-box-number">1,410</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-green"><i className="fa fa-object-ungroup	Try it
"></i></span>

                            <div className="info-box-content">
                                <span className="info-box-text">Main service</span>
                                <span className="info-box-number">410</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-yellow"><i className="fa fa-object-group"></i></span>

                            <div className="info-box-content">
                                <span className="info-box-text">Service center</span>
                                <span className="info-box-number">13,648</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-red"><i className="fa fa fa-share-alt"></i></span>

                            <div className="info-box-content">
                                <span className="info-box-text">Sub services</span>
                                <span className="info-box-number">93,139</span>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Widget;
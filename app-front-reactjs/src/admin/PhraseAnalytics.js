
import React, {Component} from "react";
import Header from './Header';
import Sidebar from './SideBar';
import Charts from './Charts';
import axios from "axios/index";

class PhraseAnalytics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phrase : '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const data = {
            "params": {
                phrase: this.state.phrase,
            }
        };

        console.log('testing', data['params']['phrase']);

        axios.get(`http://django.khadamati-ai.local/analysis?string=` + data['params']['phrase'],
            {headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            })
            .then(res => {
            console.log(res);
            }).catch(err => {
            console.log('Login error', err)
        });

    }

    render() {

        let style = {
            textAlign : 'right'
        };


        let style1 = {
            position : 'relative',
            right : '183px'
        };

        return (
            <div>
                <Header />
                <Sidebar />
                <div className="co-md-10 col-md-offset-2">
                    <h1 className="text-center">
                        <a href="" className="typewrite" data-period="2000"
                           data-type='[ "This is an AI for sentiments analysis", "Human feelings at your fingertips"]'>
                            <span className="wrap"></span>
                        </a>
                    </h1>

                    <div className="row">
                    <div className="form-group row">
                                <div className="col-md-10">
                                    <div id="fields">
                                    <input id="phrase" key="phrase" name="phrase" style={style} onChange={this.handleChange}
                                              className="form-control"
                                              placeholder="جملة للتحليل"/>
                                    </div>
                                </div>
                            </div>
                            <button onClick={this.handleSubmit} className="analytic-btn btn btn-info pull-right" style={style1}>
                                Phrase analytics
                            </button>
                    </div>

            </div>
            </div>
        );
    }
}

export default PhraseAnalytics;
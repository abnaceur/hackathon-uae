
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
            phraseRate: '',
            phraseNature: '',
            analyticsResults: '',
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
            console.log(res.data);
            const phrase  = res.data;
                const phraseNature = phrase.substring(0, phrase.search(','));
                let limit = phrase.search(',');
                limit = limit + 2;
                const phraseRate = phrase.substring(limit, phrase.lenght);
                let labelT = "label label-info";
                if (phraseNature == 'negative')
                    labelT = "label label-danger";
                else  if (phraseNature == 'negative')
                    labelT = "label label-success";

                    const analyticsResults = <div className="container">
                    <div className="row">
                        <h2>Phrase analytics results :</h2>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div className="offer offer-success">
                                <div className="shape">
                                    <div className="shape-text">
                                        <span className="glyphicon glyphicon glyphicon-eye-open"></span>
                                    </div>
                                </div>
                                <div className="offer-content">
                                    <h3 className="lead">
                                        <b>{phraseNature}</b> : <label className={labelT}>{phraseRate}</label>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div></div>;

                this.setState({phraseNature, phraseRate, analyticsResults});
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

        let style2 = {
            width : '40'
        };

        return (
            <div>
                <Header />
                <Sidebar />
                <div className="co-md-10 col-md-offset-2">
                    <h1 className="text-center"><b>
                        <a href="" className="typewrite" data-period="2000"
                           data-type='[ "This is an AI for sentiments analysis", "Human feelings at your fingertips"]'>
                            <span className="wrap"></span>
                        </a></b>
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
                {this.state.analyticsResults}
            </div>
        );
    }
}

export default PhraseAnalytics;
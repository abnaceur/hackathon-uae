import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            dialectOrigin: '',
            phraseOrigin: '',
            dialectTarget: '',
        };
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
                dialectOrigin: this.state.dialectOrigin,
                phraseOrigin: this.state.phraseOrigin,
                dialectTarget: this.state.dialectTarget,
            }
        };
        console.log(this.state.dialectOrigin);
        axios.post(`/data/submit`,
            data).then(res => {
            console.log(res);
        });
    }

    render() {

        const modalForPhraseAnalytics = <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                                          aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Phrase analytics :</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <b>Phrase :</b><br></br>
                        <p>this is a phrase</p><br></br>
                        <b>Review : </b><br></br>
                        <p>This is the review.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                    </div>
                </div>
            </div>
        </div>;
            return (
                <div>
                    <Header/>
                    <div className="container">
                        <div className="sectionform">
                            <form id="myForm"   onSubmit={this.handleSubmit} encType="multipart/form-data">
                                <div className="col-md-5">
                                <div className="form-group row">
                                    <div className="col-md-5">
                                        <select className="form-control" id="dialectOrigin" name="dialectOrigin"
                                                onChange={this.handleChange} required>
                                            <option>Choose a dialect</option>
                                            <option>Gulf dialect</option>
                                            <option>Standard arabic dialect</option>
                                            <option>Algerian dialect</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-10">
                                    <textarea name="phraseOrigin" onChange={this.handleChange}
                                              className="form-control pull-right" rows="5" id="phraseOrigin"
                                              placeholder="Enter a phrase to translate"></textarea>
                                    </div>
                                </div>
                                    <button className="analytic-btn btn btn-info" data-toggle="modal" data-target="#exampleModal">Phrase analytics</button>
                                    <button type="submit" className="btn btn-primary">Translate</button>
                                    {modalForPhraseAnalytics}
                                </div>

                                <div className="col-md-2 fix-top">
                                    <i className="glyphicon glyphicon-arrow-right arrow-left-size"></i><br></br>
                                    <i className="glyphicon glyphicon-arrow-left arrow-left-size"></i>
                                </div>

                                <div className="col-md-5">
                                    <div className="form-group row">
                                        <div className="col-md-5">
                                            <select className="form-control" id="dialectTarget" name="dialectTarget"
                                                    onChange={this.handleChange}  required>
                                                <option>Choose a dialect</option>
                                                <option>Gulf dialect</option>
                                                <option>Standard arabic dialect</option>
                                                <option>Algerian dialect</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-10">
                                    <textarea name="text-trans"
                                              className="form-control" rows="5" id="text-trans"
                                              placeholder="Text-trans"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="container fix-top">
                        <div>
                            <div className="col-md-6">
                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Definition : </h3>
                                        <span className="pull-right clickable"><i className="glyphicon glyphicon-chevron-up"></i></span>
                                    </div>
                                    <div className="panel-body">This is the definition.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            );

        }

    }

export default Home;

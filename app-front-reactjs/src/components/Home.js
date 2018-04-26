import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialectOrigin: '',
            phraseOrigin: '',
            dialectTarget: '',
            phraseTarget: '',
            allWords: '',
            phraseAnalytics: '',
            wordDifinition: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDifinition = this.handleDifinition.bind(this);

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
        axios.post(`/data/submit`,
            data).then(res => {
            const allWords = res.data;
            let i = 0;
            let words = "";
            let phraseTarget = "";
            while (i < Object.keys(allWords).length) {
                words = res.data[i][0]['word'];
                phraseTarget = phraseTarget.concat(words);
                if (Object.keys(allWords).length > 1)
                    phraseTarget = phraseTarget.concat(" ");
                i++;
            }
            this.setState({allWords, phraseTarget});
        });

    }

    handleDifinition(evemt) {
            var obj = {};
            $('#info .property').each(function () {
                var value = $(this).children('.value').html();
                obj[$(this).attr('id')] = isNaN(value) || value == '' ? value : parseInt(value);
            });
            const data = {
                "params": {
                    word: obj['text'],
                }
            };

            axios.post(`/translate`,
                data).then(res => {
                if (Object.keys(res.data).length > 0) {
                    const wordDifinition = res.data[0]['definition'];
                    this.setState({ wordDifinition });
                }
            });
    }

    render() {


        if (this.state.dialectTarget == 'Standard arabic dialect') {
            var StyleTarget = {
                textAlign: 'right',
            };
            var labelTarget = "أدخل عبارة لترجمة"
            ;
        } else {
            var labelTarget = "Enter a phrase to translate"
        }

        if (this.state.dialectOrigin == 'Standard arabic dialect') {
            var StyleOrigin = {
                textAlign: 'right',
            };
            var labelOrigin = "ترجمة إلى اللغة العربية"
            ;
        } else {
            var labelOrigin = "The translated phrase";

        }


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
                        <form id="myForm" onSubmit={this.handleSubmit} encType="multipart/form-data">
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
                                        <div id="fields">
                                    <textarea id="textarea" name="phraseOrigin" onChange={this.handleChange} style={StyleOrigin}
                                              className="form-control pull-right" rows="5"
                                              placeholder={labelOrigin}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button className="analytic-btn btn btn-info" data-toggle="modal"
                                        data-target="#exampleModal">Phrase
                                    analytics
                                </button>
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
                                    <textarea id="textarea" name="phraseTarget" value={this.state.phraseTarget} style={StyleTarget}
                                              className="form-control pull-right" rows="5"
                                              placeholder={labelTarget}></textarea>
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
                                    <h3 id="info" className="panel-title">
                                        <a href="#"><i onClick={this.handleDifinition} id="console-log" className="glyphicon glyphicon-globe"></i></a>
                                        &nbsp;Definition :
                                            <span id="text" className="property line"> <span
                                                className="value"></span></span>
                                    </h3>
                                    <span className="pull-right clickable"><i
                                        className="glyphicon glyphicon-chevron-up"></i></span>
                                </div>
                                <div className="panel-body">{this.state.wordDifinition}</div>
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

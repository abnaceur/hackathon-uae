// React
import React, { Component } from 'react';

class StartScreen extends Component {
    render() {
        
        const { personalBest, previousScore, startGame } =  this.props;
        const hasPersonalBest = (personalBest && personalBest > 0) ? true : false;
        const hasPreviousScore = previousScore ? true : false;

        return (
            <screen>
                <div className="window__outer fade-in">
                    <buton><a href="/">Dashboard</a></buton>
                    <div className="window__inner">
                        <h1 className="window__focus window__focus--sm">Arabic Warriors</h1>
                        <h2>Aim of the game</h2>
                        <p>Translate as many words as possible into your local dialect before the timer runs out!</p>
                        <p>Top 05 winners will gain Khadamati tokens KTHER</p>
                        <ul className="list-inline">
                            {(hasPersonalBest) && (
                                <li><h3 className="zero-bottom"><strong>Best score:</strong> { personalBest }</h3></li>
                            )}
                            {(hasPreviousScore) && (
                                <li><h3 className="zero-bottom"><strong>Previous score:</strong> { previousScore }</h3></li>
                            )}
                        </ul>

                        <div className="form-group row">
                            <div className="col-md-2 col-md-offset-5">
                                <select className="form-control" id="dialectTarget" name="dialectTarget"
                                        onChange={this.handleChange} required>
                                    <option>Choose your dialect</option>
                                    <option>Gulf dialect</option>
                                    <option>Standard arabic dialect</option>
                                    <option>Algerian dialect</option>
                                </select>
                            </div>
                        </div>

                        <button ref="startButton" className="bubble bubble--input window__form-control window__form-control--push" onClick={ startGame }>Start</button>
                    </div>
                </div>
            </screen>
        )
    };
};

export default StartScreen;
import React, { Component } from 'react';
import questionMark from '../assets/images/question.png';
import '../assets/css/game.css';

class Game extends Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return (
            <div className="game-area">
                <div className="game-logo text-center">
                    <img src={questionMark} alt="Question mark" className="left-logo" />
                    <img src={questionMark} alt="Question mark" className="center-logo" />
                    <img src={questionMark} alt="Question mark" className="right-logo" />
                </div>
                <h1 className="text-center my-3">Guessing Game</h1>
            </div>
        )
    }
}

export default Game;

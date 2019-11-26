import React from 'react';
import './App.css';
import {GameButtons} from './game-button';
import { PlayAgainButton } from './play-again-button';


export default class App extends React.Component {
	constructor( props ) {
		super(props);
		this.state = {
			showGameButtons: true,
			showPlayAgainButton: false,
			score: {
				Player: 0,
				Computer: 0
			}
		}
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return (
			<>
			<div className="buttons-container">
				<GameButtons visibility={this.state.showGameButtons} onClick={ this.handleClick }/>
				
			</div>
			<div className="score-container">
				<div className="score">Player { this.state.score.Player } Computer { this.state.score.Computer }</div>
				<div>
					<PlayAgainButton visibility={this.state.showPlayAgainButton} onClick={this.handleClick }/>
				</div>
			</div>
			</>
		)
	}

	handleClick() {
		this.setState( { showGameButtons: !this.state.showGameButtons, showPlayAgainButton: !this.state.showPlayAgainButton } );
	}



}


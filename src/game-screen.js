import React from 'react';
import paper from './paper.svg';
import rock from './rock.svg';
import scissors from './scissors.svg';
import { PlayAgainButton } from './play-again-button';

export class GameScreen extends React.Component {
	constructor(props) {
		super(props);
		this.computersChoice = '';
		this.state = {
			visibility: true
		}
	}
	render() {
		return (
		<>
			<div className="players-choice">
				<h3>Player:</h3>
				{this.showChoice( this.props.playersChoice ) }
			</div>
			<div className="computers-choice">
				<h3>Computer:</h3>
				{this.showChoice( this.props.computersChoice ) }
			</div>
			<div className="result">
				<h2>{ this.showResult( this.props.playersChoice, this.props.computersChoice) }</h2>
			</div>
		
		</>
		)
	}

	showChoice( choice ) {
		if ( choice === 'paper') {
			return <img src={ paper } height="35" width="35" alt="paper"></img>
		} else if ( choice === 'rock' ) {
			return <img src={ rock } height="35" width="35" alt="rock"></img>
		} else if ( choice === 'scissors' ) {
			return <img src={ scissors } height="35" width="35" alt="scissors"></img>
		}
	}

	showResult( playersChoice, computersChoice ) {
		let result;
		if ( playersChoice === computersChoice ) {
			result ='Tie';
		} else if ( playersChoice === 'rock' ) {
			if ( computersChoice === 'scissors' ) {
				result = 'You win'
			} else {
				result = 'You lose'
			}
		} else if ( playersChoice === 'paper' ) {
			if ( computersChoice === 'rock' ) {
				result = 'You win'
			} else {
				result = 'You lose'
			}
		} else if ( playersChoice === 'scissors' ) {
			if (computersChoice === 'paper' ) {
				result = 'You win'
			} else {
				result = 'You lose'
			}
		}
		
		return result;
	}
}

import React from 'react';
import { GameScreen } from './game-screen';
import paper from './paper.svg';
import rock from './rock.svg';
import scissors from './scissors.svg';

export class GameButtons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playersChoice: '',
			computersChoice: ''
		}
	
	}

	render() {
		if ( this.props.visibility ) {
			return (
				<>
				<div className="instruction">
					<h1>Rock Paper Scissors</h1>
				</div>
				<button 
					className="game-button"
					onClick={ () => {
						this.props.onClick();
						this.calculateComputersChoice();
						this.setState({ playersChoice: 'rock'}) } }>
						<img src={ rock } height="70" width="70" alt="rock" />
				</button>
				<button 
					className="game-button"
					onClick={ () => {
						this.props.onClick();
						this.calculateComputersChoice();
						this.setState({ playersChoice: 'paper'}) } }>
						<img src={ paper } height="70" width="70" alt="paper"/>
				</button>
				<button 
					className="game-button"
					onClick={ () => {
						this.props.onClick();
						this.calculateComputersChoice();
						this.setState({ playersChoice: 'scissors'}) } }>
						<img src={ scissors } height="70" width="70" alt="scissors"/>
				</button>
				</>
			)
		} else {
			return <GameScreen playersChoice={this.state.playersChoice} computersChoice={this.state.computersChoice}/>
		}

	}

	calculateComputersChoice() {
		const results = [ 'paper', 'rock', 'scissors' ];
		const computersChoice = results[ Math.floor( Math.random() * 3 ) ];
		this.setState( {computersChoice });
	}

}
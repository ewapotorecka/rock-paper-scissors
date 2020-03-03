
import React from 'react';
import { connect } from 'react-redux';
import ResultScreen from './result-screen';
import paper from './paper.svg';
import rock from './rock.svg';
import scissors from './scissors.svg';

function mapStateToProps( state ) {
	return {
		showGameScreen: state.showGameScreen
	};
}

class GameScreen extends React.Component {
	calculateComputersChoice() {
		const results = [ 'paper', 'rock', 'scissors' ];
		const computersChoice = results[ Math.floor( Math.random() * 3 ) ];
		this.setState( { computersChoice } );
	}

	handleClick( playersChoice ) {
		this.calculateComputersChoice();
		this.setState( { playersChoice } );
		this.props.dispatch( { type: 'SHOW_RESULT_SCREEN' } );
	}

	render() {
		if ( this.props.showGameScreen ) {
			return (
				<>
					<div className="instruction">
						<h1>Rock Paper Scissors</h1>
					</div>
					<button
						className="game-button"
						id="rock"
						onClick={ () => {
							this.handleClick( 'rock' );
						} }>
						<img src={ rock } height="70" width="70" alt="rock" />
					</button>
					<button
						className="game-button"
						onClick={ () => {
							this.handleClick( 'paper' );
						} }>
						<img src={ paper } height="70" width="70" alt="paper" />
					</button>
					<button
						className="game-button"
						onClick={ () => {
							this.handleClick( 'scissors' );
						} }>
						<img src={ scissors } height="70" width="70" alt="scissors" />
					</button>
				</>
			);
		} else {
			return <ResultScreen playersChoice={ this.state.playersChoice } computersChoice={ this.state.computersChoice } />;
		}
	}
}

export default connect( mapStateToProps )( GameScreen );

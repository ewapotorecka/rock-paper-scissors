import React from 'react';
import { PlayAgainButton } from './play-again-button';
import { connect } from 'react-redux';
import paper from './paper.svg';
import rock from './rock.svg';
import scissors from './scissors.svg';
/* 
	Result: 
	-1 -> Player lost
	0 -> Tie
	1 -> Player won
*/
const figuresCode = {
	'rock': 0,
	'paper': 1,
	'scissors': 2
};

const results = [ [ 0, -1, 1 ], [ 1, 0, -1 ], [ -1, 1, 0 ] ];

function mapStateToProps( state ) {
	return {
		showResultScreen: state.showResultScreen
	};
}

class ResultScreen extends React.Component {
	constructor( props ) {
		super( props );
		this.computersChoice = '';
		this.handleClick = this.handleClick.bind( this );
	}

	render() {
		return (
			<>
				<div className="players-choice">
					<h3>Player: </h3>
					{ this.showChoice( this.props.playersChoice ) }
				</div>
				<div className="computers-choice">
					<h3>Computer: </h3>
					{ this.showChoice( this.props.computersChoice ) }
				</div>
				<div className="result">
					<h2>{ this.showResult( this.props.playersChoice, this.props.computersChoice ) }</h2>
				</div>
				<div>
					<PlayAgainButton
						onClick={this.handleClick}
					/>
				</div>
			</>
		);
	}

	showChoice( choice ) {
		if ( choice === 'paper' ) {
			return <img src={paper} height="35" width="35" alt="paper" />;
		} else if ( choice === 'rock' ) {
			return <img src={rock} height="35" width="35" alt="rock" />;
		} else if ( choice === 'scissors' ) {
			return <img src={scissors} height="35" width="35" alt="scissors" />;
		}
	}

	showResult( playersChoice, computersChoice ) {
		const playersChoiceCode = figuresCode[ playersChoice ];
		const computersChoiceCode = figuresCode[ computersChoice ];
		let result = results[ playersChoiceCode ][ computersChoiceCode];

		if ( result === 0 ) {
			result = 'Tie';
			this.updateScore( result );
		} else if ( result === -1 ) {
			result = 'You lose';
			this.updateScore( result );
		} else if ( result === 1 ) {
			result = 'You win';
			this.updateScore( result );
		}

		return result;
	}

	handleClick() {
		this.props.dispatch( { type: 'SHOW_GAME_SCREEN' } );
	}

	updateScore( result ) {
		if ( result === 'You win' ) {
			this.props.dispatch( { type: 'UPDATE_SCORE_PLAYER_WIN' } );
		} else if ( result === 'You lose' ) {
			this.props.dispatch( { type: 'UPDATE_SCORE_COMPUTER_WIN' } );
		} else if ( result === 'Tie' ) {
			this.props.dispatch( { type: 'UPDATE_SCORE_TIE' } );
		}
	}
}

export default connect( mapStateToProps )( ResultScreen );

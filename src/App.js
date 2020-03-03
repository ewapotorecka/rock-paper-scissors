import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import GameScreen from './game-screen';
import ScoreContainer from './score-container';

const initialState = {
	showGameScreen: true,
	showResultScreen: false,
	score: {
		Player: 0,
		Computer: 0
	}
};

const store = createStore( reducer );

function reducer( state = initialState, action ) {
	switch ( action.type ) {
		case 'UPDATE_SCORE_TIE':
			return state;
		case 'UPDATE_SCORE_PLAYER_WIN':
			return {
				...state,
				score: {
					Player: state.score.Player + 1,
					Computer: state.score.Computer
				}
			};
		case 'UPDATE_SCORE_COMPUTER_WIN':
			return {
				...state,
				score: {
					Player: state.score.Player,
					Computer: state.score.Computer + 1
				}
			};
		case 'RESET_SCORE':
			return {
				...state,
				score: {
					Player: 0,
					Computer: 0
				}
			}
		case 'SHOW_RESULT_SCREEN':
			return {
				...state,
				showGameScreen: false,
				showResultScreen: true
			};
		case 'SHOW_GAME_SCREEN':
			return {
				...state,
				showGameScreen: true,
				showResultScreen: false
			};
		default:
			return state;
	}
}

export default class App extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			showGameScreen: true,
			showPlayAgainButton: false,
			score: {
				Player: 0,
				Computer: 0
			}
		};
	}

	render() {
		return (
			<>
				<Provider store={store}>
					<div className="buttons-container">
						<GameScreen />
					</div>
					<div className="score-container">
						<ScoreContainer />
					</div>
				</Provider>
			</>
		);
	}
}

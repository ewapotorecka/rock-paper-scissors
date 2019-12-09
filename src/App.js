import React from "react";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import "./App.css";
import { GameScreen } from "./game-screen";
import { PlayAgainButton } from "./play-again-button";

const initialState = {
	showGameButtons: true,
	showPlayAgainButton: false,
	score: {
	  Player: 0,
	  Computer: 0
	}
  };
const store = createStore(reducer);



function reducer(state = initialState, action) {
  console.log("reducer", state, action);
  switch(action.type) {
	case 'UPDATE_SCORE':
		return {

		};
	case 'SHOW_RESULT_SCREEN':
		return {
			showGameButtons: false,
			showPlayAgainButton: true
		};
	case 'SHOW_GAME_SCREEN':
		return {
			showGameButtons: true,
			showPlayAgainButton: false
		};
	default:
		return state;
}
}



store.dispatch({type: 'SHOW_RESULT_SCREEN'});
store.dispatch({type: 'SHOW_GAME_SCREEN'});




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGameButtons: true,
      showPlayAgainButton: false,
      score: {
        Player: 0,
        Computer: 0
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <>
	  	<Provider store={store}>
			<div className="buttons-container">
			<GameScreen
				visibility={this.state.showGameButtons}
				onClick={this.handleClick}
			/>
			</div>
			<div className="score-container">
			<div className="score">
				Player {this.state.score.Player} Computer{" "}
				{this.state.score.Computer}
			</div>
			<div>
				<PlayAgainButton
				visibility={this.state.showPlayAgainButton}
				onClick={this.handleClick}
				/>
			</div>
			</div>
		</Provider>
      </>
    );
  }

  handleClick() {
    this.setState({
      showGameButtons: !this.state.showGameButtons,
      showPlayAgainButton: !this.state.showPlayAgainButton
    });
  }
}

import React from 'react';
import './App.css';
import {GameButtons} from './game-button';


export default class App extends React.Component {
	constructor( props ) {
		super(props);
		this.state = {
			showButtons: true
		}
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return (
			<>
			<div className="buttons-container">
				<GameButtons visibility={this.state.showButtons} onClick={ this.handleClick }/>
				
			</div>
			</>
		)
	}

	handleClick() {
		this.setState( { showButtons: false } );
	}



}


import React from 'react';

export class PlayAgainButton extends React.Component {
	render () {
		if ( !this.props.visibility ){
			return null;
		} else {
			return (
				<button className="play-again" onClick={ ()=> this.props.onClick()}>Play again</button>
				)
		}
		
	}
}
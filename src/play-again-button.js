import React from 'react';

export class PlayAgainButton extends React.Component {
	render() {
		return (
			<button className="play-again" onClick={ () => this.props.onClick() }>Play again</button>
		);
	}
}

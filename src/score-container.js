import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps( state ) {
	return {
		score: state.score
	};
}

class ScoreContainer extends React.Component {
	constructor( props ) {
		super( props );
		this.handleClick = this.handleClick.bind( this );
	}
	
	render() {
		return (
			<>
				<div className="score">
				<div><h3>SCORE</h3></div>
				<div>
					Player { this.props.score.Player } Computer{ ' ' }
					{ this.props.score.Computer }
				</div>
					<button onClick={ this.handleClick }>Reset score</button>
				</div>
				
			</>
		);
	}

	handleClick() {
		this.props.dispatch( { type: 'RESET_SCORE' } );
	}
}

export default connect( mapStateToProps )( ScoreContainer );

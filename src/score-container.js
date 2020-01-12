import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps( state ) {
	return {
		score: state.score
	};
}

class ScoreContainer extends React.Component {
	render() {
		return (
			<>
				<div className="score">

					Player { this.props.score.Player } Computer{ ' ' }
					{ this.props.score.Computer }
				</div>
			</>
		);
	}
}

export default connect( mapStateToProps )( ScoreContainer );

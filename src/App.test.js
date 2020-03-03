import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GameScreen from './game-screen';
import ResultScreen from './result-screen';
import ScoreContainer from './score-container';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( { adapter: new Adapter() } );

it( 'renders without crashing', () => {
	const div = document.createElement( 'div' );

	ReactDOM.render( <App />, div );
	ReactDOM.unmountComponentAtNode( div );
} );

it( 'renders GameScreen component', () => {
	const wrapper = shallow( <App /> );

	expect( wrapper.find( GameScreen ) ).toHaveLength( 1 );
} );

it( 'renders ScoreContainer', () => {
	const wrapper = shallow( <App/> );

	expect( wrapper.find( ScoreContainer ) ).toHaveLength( 1 );
} );

it( 'should show ResultScreen, after clicking on one of the options( rock, paper, scissors', () => {
	const wrapper = mount( <App/> );

	expect( wrapper.find( ResultScreen ) ).toHaveLength( 0 );
	wrapper.find( 'button#rock' ).simulate( 'click' );
	expect( wrapper.find( ResultScreen ) ).toHaveLength( 1 );
} );

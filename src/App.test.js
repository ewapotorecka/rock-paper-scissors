import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GameScreen from './game-screen';
import { shallow, configure } from 'enzyme';
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

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import * as serviceWorker from './serviceWorker';
import AllRoutes from './components/AllRoutes';
import { createStore } from 'redux'

function game(state = {}, action) {
  switch (action.type) {
    case 'ADD_ROUND':
    	
      	return {
      		...state,
      		round:state.round + 1
      	}
    default:
      	return state
  }
}

const store = createStore(game, {
            player1: {
            	name: "PlayerOne",
            	wins: 0
            },
            player2: {
            	name: "PlayerTwo",
            	wins: 0
            },
            players: [],
            round:1,
            gameStarted:false
        })

store.dispatch({
  type: 'ADD_ROUND'
})


const jsx= (
    <Provider store={store}>
        <AllRoutes />
    </Provider>
);

const renderApp = () => {
    ReactDOM.render(jsx, document.getElementById('root'));
};
renderApp();

serviceWorker.unregister();

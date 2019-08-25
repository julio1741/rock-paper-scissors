import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import * as serviceWorker from './serviceWorker';
import AllRoutes from './components/AllRoutes';
import { createStore } from 'redux'

function game(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

const store = createStore(game, ['Use Redux'])

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
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
//ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

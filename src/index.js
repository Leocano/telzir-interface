import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css'
import App from './components/App/App';
import { Provider } from 'mobx-react'
import rootStore from './stores/rootStore'

ReactDOM.render(
  <Provider {...rootStore.stores}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

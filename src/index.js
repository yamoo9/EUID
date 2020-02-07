import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './utils/serviceWorker';

import App from './App/App';
import './styles/index.sass';
import './utils/checkIE';

ReactDOM.render(<App />, document.getElementById('app'));

serviceWorker.register();

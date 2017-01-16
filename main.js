import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('codemirror/mode/javascript/javascript')
injectTapEventPlugin();

ReactDOM.render(<MuiThemeProvider>
	<App />
	</MuiThemeProvider>, document.getElementById('app'));

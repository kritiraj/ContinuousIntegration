import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FileUpload from './FileUpload.jsx';

injectTapEventPlugin();
ReactDOM.render(
	<MuiThemeProvider>
		<FileUpload />
	</MuiThemeProvider>, document.getElementById('app'));
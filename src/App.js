import { React } from 'react';
import './App.scss';
import Target from './components/target';
import context from './core/context';

const App = () => {
	// eslint-disable-next-line no-console
	console.log(context.state);
	return <div className="App">
		{ Target() }
	</div>;
};

export default App;

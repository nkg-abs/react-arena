import { React } from 'react';
import './App.scss';
import Target from './components/target';

const App = () => <div className="App" role="app">
	{ Target() }
</div>;

export default App;

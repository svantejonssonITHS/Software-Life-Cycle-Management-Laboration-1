import './App.css';
import { version } from '../package.json';
import Glitch from './components/Glitch/Glitch';
import Version from './components/Version/Version';

function App() {
	return (
		<>
			<Glitch text="Hello World!" />
			<Version versionNumber={version} />
		</>
	);
}

export default App;

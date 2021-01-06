import './App.css';

//components
import AppTitle from './components/AppTitle';
import InfoContainer from './components/InfoContainer';

function App() {
	return (
		<div className="App">
			<div className="container">
				<div>
					<AppTitle />
					<h6>Search up your favorite crypto.</h6>
				</div>
				<InfoContainer />
			</div>
		</div>
	);
}

export default App;

import './App.css';
import AppInput from './components/AppForm';

//components
import AppTitle from './components/AppTitle';
import InfoContainer from './components/InfoContainer';
import AppForm from './components/AppForm';

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="right__side">
					<AppTitle />
					<h6>Search up your favorite crypto.</h6>
					<AppForm />
				</div>
				<InfoContainer />
			</div>
		</div>
	);
}

export default App;

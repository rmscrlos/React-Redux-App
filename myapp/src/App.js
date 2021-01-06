import './App.css';

//components
import AppTitle from './components/AppTitle';
import InfoContainer from './components/InfoContainer';
import AppForm from './components/AppForm';
import AppHistoryList from './components/AppHistoryList';

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
				<AppHistoryList />
			</div>
		</div>
	);
}

export default App;

import axios from 'axios';

export const FETCH_COINS_START = 'FETCH_COINS_START';
export const FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS';
export const FETCH_COINS_ERROR = 'FETCH_COINS_ERROR';
export const ADD_COIN = 'ADD_COIN';
export const SELECT_COIN = 'SELECT_COIN';

const headers = {
	Accept: 'application/json'
};

export const fetchCoins = () => dispatch => {
	dispatch({ type: FETCH_COINS_START });

	axios
		.get('https://api.coinlore.net/api/tickers/', { headers: headers })
		.then(res => {
			dispatch({ type: FETCH_COINS_SUCCESS, payload: res.data.data });
		})
		.catch(err => {
			dispatch({ type: FETCH_COINS_ERROR, payload: err.message });
		});
};

export const addCoin = name => dispatch => {
	dispatch({ type: ADD_COIN, payload: name });
};

export const selectCoin = id => dispatch => {
	dispatch({ type: SELECT_COIN, payload: id });
};

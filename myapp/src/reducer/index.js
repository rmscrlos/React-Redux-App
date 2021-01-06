import { addCoin } from '../actions';

const initialState = {
	isFetching: false,
	error: '',
	coin: {
		name: '',
		rank: '',
		symbol: '',
		price: 0
	},
	coins: [],
	history: []
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_COINS_START':
			return {
				...state,
				isFetching: true
			};
		case 'FETCH_COINS_SUCCESS':
			return {
				...state,
				isFetching: false,
				error: '',
				coins: action.payload
			};
		case 'FETCH_COINS_ERROR':
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		case 'ADD_COIN':
			const addedCoin = state.coins.filter(coin => coin.nameid === action.payload);
			if (!addedCoin[0]) {
				return state;
			} else {
				return {
					...state,
					coin: {
						name: addedCoin[0].name,
						rank: addedCoin[0].rank,
						symbol: addedCoin[0].symbol,
						price: addedCoin[0].price_usd
					},
					history: [...state.history, addedCoin[0]]
				};
			}

		case 'SELECT_COIN': {
			const selectedCoin = state.history.filter(coin => coin.id === action.payload);
			return {
				...state,
				coin: {
					name: selectedCoin[0].name,
					rank: selectedCoin[0].rank,
					symbol: selectedCoin[0].symbol,
					price: selectedCoin[0].price_usd
				}
			};
		}
		default: {
			return state;
		}
	}
};

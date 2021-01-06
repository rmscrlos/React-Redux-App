import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectCoin } from '../actions';

const Container = styled.div`
	height: 25rem;
	width: 5rem;
	margin-left: 1rem;
	overflow: scroll;

	&::-webkit-scrollbar {
		width: 8px;
		height: 0px;
	}
	&::-webkit-scrollbar-thumb {
		background: linear-gradient(#fff, pink 40%);
		border-radius: 10px;
	}
	&::-webkit-scrollbar-thumb:hover {
		background: linear-gradient(pink, #fff);
	}
`;

const Coin = styled.h1`
	cursor: pointer;
	margin-bottom: 1.2rem;
	padding-bottom: 0.2rem;
	font-size: 1.2rem;
	color: aliceblue;
	border-bottom: 2px solid #fff;
	display: inline-block;
	width: auto;
`;

function AppHistoryList({ history, selectCoin }) {
	console.log(selectCoin);
	return (
		<Container>
			{history.map(coin => (
				<Coin onClick={() => selectCoin(coin.id)}>{coin.symbol}</Coin>
			))}
		</Container>
	);
}

const mapStateToProps = state => {
	return {
		history: state.history
	};
};

const mapDispatchToProps = { selectCoin };

export default connect(mapStateToProps, mapDispatchToProps)(AppHistoryList);

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchCoins } from '../actions';

function InfoContainer({ fetchCoins, coin }) {
	useEffect(() => {
		fetchCoins();
	}, []);

	return (
		<Container>
			<Top>
				<Rank>#{coin.rank}</Rank>
				<Symbol>{coin.symbol}</Symbol>
			</Top>
			<Line></Line>
			<Bottom>
				<Name>{coin.name}</Name>
				<Name>_</Name>
				<Price>{coin.price}</Price>
			</Bottom>
		</Container>
	);
}
const Container = styled.div`
	margin-left: 20px;
	background: linear-gradient(#fff, pink 40%);
	height: 70vh;
	width: 600px;
	border-radius: 1rem;
	box-shadow: 0px 0px 20px #464646;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Top = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Rank = styled.h1`
	font-size: 12rem;
	color: #fff;
`;

const Symbol = styled.h1`
	line-height: 0.8;
	width: 10%;
	font-size: 3.5rem;
	color: #fff;
	word-break: break-all;
`;

const Bottom = styled.div`
	margin-top: 0.5rem;
	width: 40%;
	display: flex;
	justify-content: space-around;
`;

const Name = styled.h1`
	font-size: 1.5rem;
	color: #fff;
`;

const Price = styled.h2`
	font-size: 1.5rem;
	color: #fff;
	/* margin-left: 0.6rem; */
`;

const Line = styled.div`
	margin-top: -2rem;
	background-color: aliceblue;
	height: 2px;
	width: 43%;
`;

const mapStateToProps = state => {
	return {
		state,
		coin: state.coin
	};
};

const mapDispatchToProps = { fetchCoins };

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);

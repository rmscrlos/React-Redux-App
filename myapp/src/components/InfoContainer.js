import React from 'react';
import styled from 'styled-components';

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

const Price = styled.h1`
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

function InfoContainer(props) {
	return (
		<Container>
			<Top>
				<Rank>#1</Rank>
				<Symbol>BTC</Symbol>
			</Top>
			<Line></Line>
			<Bottom>
				<Name>Bitcoin</Name>
				<Name>_</Name>
				<Price> $1,000</Price>
			</Bottom>
		</Container>
	);
}

export default InfoContainer;

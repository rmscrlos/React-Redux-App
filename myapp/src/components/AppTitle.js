import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 4rem;
	text-align: left;
	text-transform: uppercase;
	color: aliceblue;
`;

const Line = styled.div`
	background-color: aliceblue;
	height: 2px;
	width: 50%;
`;

const Pink = styled.span`
	color: pink;
`;

function AppTitle(props) {
	return (
		<Title>
			<h1>
				Cryp<br></br>to<Pink>.</Pink>
			</h1>
			<Line></Line>
		</Title>
	);
}

export default AppTitle;

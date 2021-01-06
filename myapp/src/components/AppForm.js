import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCoin } from '../actions/index';

function AppForm({ addCoin }) {
	const [input, setInput] = useState('');

	const handleChange = e => {
		let val = e.target.value;
		setInput(val.toLowerCase());
	};

	const handleSubmit = e => {
		e.preventDefault();
		setInput('');
		addCoin(input);
	};

	return (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<input type="text" value={input} placeholder="bitcoin..." onChange={handleChange} />
				<button disabled={!input} type="submit">
					search
				</button>
			</form>
		</div>
	);
}

const mapDispatchToState = { addCoin };

export default connect(null, mapDispatchToState)(AppForm);

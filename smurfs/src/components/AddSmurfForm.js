import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { SmurfContext } from '../contexts/SmurfContext';


const ASFWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;

	font-size: 2.4rem;
	text-align: center;

	h3 {
		font-size: 3rem;
		margin: 10px;
	}

`;


const AddSmurfForm = () => {

	//const { smurfList } = useContext(SmurfContext);

	const initialFormState = { name: '', age: '', height: '' };

	const [formState, setFormState] = useState(initialFormState);

	const submitForm = (e) => {
		e.preventDefault();
		console.log('submit form', formState);
		resetForm();
	};

	const updateField = (e) => {
		setFormState( {...formState, [e.target.name]: e.target.value });
	};

	const resetForm = (e) => {
		e.preventDefault();
		setFormState(initialFormState);
	};

	return (
		<ASFWrapper>
			<h3>Enter a New Smurf here:</h3>
			<form onSubmit={submitForm} className='add-smurf'>
				<input name='name' className='name' placeholder='Name'
					onChange={updateField} value={formState.name} />
				<input name='age' className='age' placeholder='Age'
					onChange={updateField} value={formState.age} />
				<input name='height' className='height' placeholder='Height'
					onChange={updateField} value={formState.height} />

			</form>
		</ASFWrapper>
	);
};

export default AddSmurfForm;

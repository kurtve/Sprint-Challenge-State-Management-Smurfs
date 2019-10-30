import React, { useContext } from 'react';
import styled from 'styled-components';
import { SmurfContext } from '../contexts/SmurfContext';
import * as helpers from './helperFunctions';


const SmurfWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	padding: 10px;

	background-color: dodgerblue;
	color: white;
	width: 300px;
	border-radius: 10px;

	p {
		margin: 5px;
		font-size: 2rem;
	}

	.name {
		font-size: 2.6rem;
	}

	.button-bar {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		margin-top: 5px;
		padding: 5px;

		button {
			height: 20px;
			background-color: white;
			color: royalblue;
			border: none;
			border-radius: 5px;
			width: 50px;
			font-size: 1.2rem;

			&:hover {
				cursor: pointer;
			}
		}
	}

`;


const Smurf = (props) => {

	// dispatcher for delete function
	const { dispatch } = useContext(SmurfContext);

	const deleteSmurf = (e) => {
		e.preventDefault();
		helpers.deleteSmurf(props.smurf.id, dispatch);
	};

	const editSmurf = (e) => {
		e.preventDefault();
		props.history.push(`/edit/${props.smurf.id}`);
	};



	return (
		<SmurfWrapper>
			<p className='name'>{props.smurf.name}</p>
			<p className='age'>Age: {props.smurf.age}</p>
			<p className='height'>Height: {props.smurf.height}</p>
			<div className='button-bar'>
				<button onClick={e => editSmurf(e)}>Edit</button>
				<button onClick={e => deleteSmurf(e)}>Delete</button>
			</div>
		</SmurfWrapper>
	);
};

export default Smurf;

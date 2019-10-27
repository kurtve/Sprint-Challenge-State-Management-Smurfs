import React, { useContext } from 'react';
import styled from 'styled-components';
import { SmurfContext } from '../contexts/SmurfContext';



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

`;


const Smurf = (props) => {

	const { smurfList, setSmurfList } = useContext(SmurfContext);

	return (
		<SmurfWrapper>
			<p className='name'>{props.smurf.name}</p>
			<p className='age'>Age: {props.smurf.age}</p>
			<p className='height'>Height: {props.smurf.height}</p>
		</SmurfWrapper>
	);
};

export default Smurf;

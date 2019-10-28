import React, { useContext } from 'react';
import styled from 'styled-components';
import { SmurfContext } from '../contexts/SmurfContext';
import Smurf from './Smurf';


const SLWrapper = styled.div`
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


const SmurfList = () => {

	const { state } = useContext(SmurfContext);

	return (
		<SLWrapper>
			<h3>Here are your Smurfs:</h3>
			{state.smurfList.map(smurf => (
				<Smurf key={smurf.id} smurf={smurf} />
			))}
		</SLWrapper>
	);
};

export default SmurfList;

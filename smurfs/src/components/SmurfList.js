import React, { useContext } from 'react';
import styled from 'styled-components';
import { SmurfContext } from '../contexts/SmurfContext';
import Smurf from './Smurf';


const SLWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;

	font-size: 2.4rem;
	text-align: center;

	h3 {
		font-size: 3rem;
		margin: 10px;
	}

`;


const SmurfList = (props) => {

	const { smurfState } = useContext(SmurfContext);

	return (
		<SLWrapper>
			<h3>Here are your Smurfs:</h3>
			{smurfState.smurfList.map(smurf => (
				<Smurf key={smurf.id} {...props} smurf={smurf} />
			))}
		</SLWrapper>
	);
};

export default SmurfList;

import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import { SmurfContext } from '../contexts/SmurfContext';
import { smurfReducer, initialState } from '../reducers/smurfReducer';
import SmurfList from './SmurfList';
import AddSmurfForm from './AddSmurfForm';
import { LOAD_SMURFS } from '../reducers/smurfReducer';
import axios from 'axios';


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  color: royalblue;
  font-size: 2.4rem;
  text-align: center;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin: 10px;
  }

`;


const App = () => {

  const [smurfState, dispatch] = useReducer(smurfReducer, initialState);

  // load the initial smurf list
  useEffect(() => {
      console.log('in useEffect');
      axios
        .get('http://localhost:3333/smurfs')
          .then(res => {
            console.log(res.data);
            dispatch({type: LOAD_SMURFS, payload: res.data});
          })
        .catch(err => {
          console.log(err);
        });
  }, []);


  return (
    <SmurfContext.Provider value={ {smurfState, dispatch} }>
      <AppWrapper>
        <h1>SMURFS! 2.0 with Reducer</h1>
        <AddSmurfForm />
        <SmurfList />
      </AppWrapper>
    </SmurfContext.Provider>
  );
};

export default App;

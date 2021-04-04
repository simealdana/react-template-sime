import React, { Fragment } from 'react';
import styled from "styled-components";

const Button = styled.button`
  padding: 5px 12px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  background-color: red;
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
`;

const Home = ()=>(
    <Fragment>
        <h1>Hola</h1>
        <Button>Button</Button>
    </Fragment>
)

export default Home;

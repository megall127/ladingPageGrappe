import React from 'react';
import styled from 'styled-components';
import reactJS from "./Assets/reactJS.png";
import reactNative from "./Assets/reactNative.png";
import nodeJs from "./Assets/nodeJs.png";
import NextJS from "./Assets/Next-JS.png";
import AWS from "./Assets/AWS.png";

const SectionContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 400px;
`;

const Section3 = ({ color, title }) => {
  return (
    <SectionContainer bgColor={color}>
      <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", width: '50%' }}>
      <div style={{marginTop: 15}}>
        <text style={{color: 'white', marginTop: '20%', marginRight: 10}}>
          Aplicativos
        </text>
        <text style={{color: 'white', marginTop: '20%', marginRight: 10}}>
          LadingPage
        </text>
        <text style={{color: 'white', marginTop: '20%', marginRight: 10}}>
          Sistemas
        </text>
        <text style={{color: 'white', marginTop: '20%', marginRight: 10}}>
          Refatoração de sistemas
        </text>
        <text style={{color: 'white', marginTop: '20%', marginRight: 10}}>
           Prototipos
        </text>
        </div>
        <text style={{color: 'white', marginTop: '20px'}}>
        Tecnologias que usamos
        </text>
        <div style={{marginTop: 15}}>
          <img style={{height: 80}} src={reactJS}></img>
          <img style={{height: 80, marginLeft: 10}} src={reactNative}></img>
          <img style={{height: 80, marginLeft: 10}} src={nodeJs}></img>
          <img style={{height: 80, marginLeft: 10}} src={NextJS}></img>
          <img style={{height: 80, marginLeft: 10}} src={AWS}></img>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Section3;

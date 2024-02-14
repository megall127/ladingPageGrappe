import React from 'react';
import Menu from './Menu';
import Section from './Section';
import styled from 'styled-components';
import Carousel from './components/Carousel';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import imageBg from "./Assets/image.png";
import GlobalStyle from './globalStyled';

const AppContainer = styled.div`
  background-color: #791D43;
  background-image: url(${imageBg});
  background-repeat: repeat-y; 

  @media (max-width: 768px) {// Altera para cover em dispositivos menores se necessário
    background-size: contain;
    background-repeat: repeat; 
  }
`;

const Item = styled.div`
  height: 200px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  @media (max-width: 768px) {
    height: 150px; // Ajusta a altura para dispositivos menores
    font-size: 20px; // Ajusta o tamanho da fonte para dispositivos menores
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Menu />
        {/* <div id="section1" style={{ width: '100%' }}>
          <Section color="transparent" title="Seção 1" />
        </div> */}
         <div id="section2">
          <Section2 color="white" title="Seção 2" />
        </div>
        {/*<div id="section3">
          <Section3 color="transparent" title="Seção 3" />
        </div>
        <div id="section4">
          <Section4 color="white" title="Seção 4" />
      </div> */}
      </AppContainer>
    </>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import AutoCarousel from './components/Carousel';
import print1 from "./Assets/prints1/lndPrint1.jpeg";
import print2 from "./Assets/prints1/lndPrint2.jpeg";
import print3 from "./Assets/prints1/lndPrint3.jpeg";
import print4 from "./Assets/prints1/lndPrint4.jpeg";
import print5 from "./Assets/prints2/btf.png";
import lndLogo from "./Assets/prints1/LND_2.png";
import btfLogo from "./Assets/prints2/logoBtf.png";
import lezzesPrint1 from "./Assets/prints3/lezzesprint.png";
import lezzesLogo from "./Assets/prints3/logoLezzes.png";

const SectionContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  // Media query para telas menores
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;

const ImageWithShadow = styled.img`
  height: 80%;
  width: 25%;
  margin: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  // Ajuste para telas menores
  @media (max-width: 768px) {
    height: 10%;
  }
`;


const ImageOne = styled.div`


`

const SlideOne = styled.div`
    height: 100%;
    width: 70%;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 768px) {
    position: absolute;
    margin-right: 20%;
  }
`


const Section = ({ color, title, children }) => {
    return (
        <SectionContainer bgColor={color}>
            {/* <AutoCarousel>
                <SlideOne>
                    <ImageOne style={{ width: '60%' }}>
                        <ImageWithShadow src={print1} />
                        <ImageWithShadow src={print2} />
                        <ImageWithShadow src={print4} />
                    </ImageOne>
                    <div style={{ width: '30%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: 'white', marginRight: 10 }}>
                        <img style={{ height: '80px', width: '150px' }} src={lndLogo} />
                        <text style={{ fontWeight: "700", fontSize: 20, marginTop: 20 }}>Aplicativo de gestão</text>
                        <text style={{ textAlign: "center" }}>APP de gestão de desempenho dos monitores da escola de dança ‘la na dança’.</text>
                    </div>
                </SlideOne>
                <div style={{ height: 400, width: "60%", backgroundColor: "white", borderRadius: 20, display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div style={{ width: '70%' }}>
                        <ImageWithShadow style={{ width: '80%' }} src={print5} />
                    </div>
                    <div style={{ width: '30%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: 'white', marginRight: 10 }}>
                        <img style={{ height: 100 }} src={btfLogo} />
                        <text style={{ fontWeight: "700", fontSize: 20 }}>Lading Page</text>
                        <text style={{ textAlign: "center", marginTop: 10 }}>Pagina de vendas e informação para evento de dança!</text>
                    </div>
                </div>
                <div style={{ height: 400, width: "60%", backgroundColor: "white", borderRadius: 20, display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div style={{ width: '70%' }}>
                        <ImageWithShadow style={{ width: '80%' }} src={lezzesPrint1} />
                    </div>
                    <div style={{ width: '30%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: 'white', marginRight: 10 }}>
                        <img style={{ height: 100 }} src={lezzesLogo} />
                        <text style={{ fontWeight: "700", fontSize: 20 }}>Streaming</text>
                        <text style={{ textAlign: "center", marginTop: 10 }}>Desenvolvimento de sistema de exibição de filme.</text>
                    </div>
                </div>
            </AutoCarousel> */}
        </SectionContainer>
    );
};

export default Section;





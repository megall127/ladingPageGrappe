import React from 'react';
import styled from 'styled-components';
import leandro from './Assets/fotos/leandrofoto.jpeg';
import clara from './Assets/fotos/clarafoto.jpeg';
import maria from './Assets/fotos/mariafoto.jpg';
import gabriel from './Assets/fotos/gabrielfoto.jpg';
import ramon from './Assets/fotos/ramonfoto.jpg';


const SectionContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Circle = styled.div`
  background-color: #ddd;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 55px;
`;

const PersonInfo = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const TeamContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const InfoContainer = styled.div`
  width: 30%;
  height: 500px;
  margin-top: 200px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6); // Sombra sutil
  background-color: #540023;
  border-radius: 20px;
`;


const Title = styled.h2`
  margin-bottom: 15px;
  color: white;
`;

const Description = styled.p`
  color: white;
  text-align: center;
  margin-left: 40px;
  margin-right: 40px;
`;


const Section2 = ({ color }) => {
  const people = [
    { name: 'Leandro Wilker', position: 'CEO/Dev mobile', image: leandro},
    { name: 'Clara Moreira', position: 'Product Manager/QA', image: clara },
    { name: 'Maria Luisa', position: 'UX/UI', image: maria },
    { name: 'Gabriel Araújo', position: 'Tech Lead/ Dev back-end', image: gabriel },
    { name: 'Ramon Dias', position: 'Dev front-end/mobile', image: ramon },
    // Adicione mais pessoas conforme necessário
  ];

  return (
    <SectionContainer bgColor={color}>
    <TeamContainer>
      <CircleRow>
        {people.slice(0, 3).map(person => (
          <div key={person.name}>
            <Circle image={person.image} />
            <PersonInfo>{person.name}<br/>{person.position}</PersonInfo>
          </div>
        ))}
      </CircleRow>
      <CircleRow>
        {people.slice(3, 6).map(person => (
          <div key={person.name}>
            <Circle image={person.image} />
            <PersonInfo>{person.name}<br/>{person.position}</PersonInfo>
          </div>
        ))}
      </CircleRow>
    </TeamContainer>
    <InfoContainer>
      <Title>Título da Empresa</Title>
      <Description>
        Aqui vai um texto descritivo sobre a empresa. Este texto pode falar sobre a missão, visão, valores, história ou qualquer outro aspecto relevante da empresa que você deseja destacar.
      </Description>
    </InfoContainer>
  </SectionContainer>
);
};

export default Section2;

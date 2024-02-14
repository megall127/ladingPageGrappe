import React from 'react';
import styled from 'styled-components';
import grapeNexus from "../src/Assets/grapeNexus.png"

const MenuContainer = styled.div`
  background-color: transparent;
  color: white;
  height: 200px;    
  width: 90%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: center;
  }
`;

const MenuItem = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;

  @media (max-width: 768px) {
    height: 170px;
    width: 170px;
    margin-left: 10%;
  }
`;

const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};

const Menu = () => {
    return (
        <MenuContainer>
                <Logo src={grapeNexus}></Logo>
            <div style={{width: '30%', height: '100%', display: "flex"}}>
            <MenuItem onClick={() => scrollToSection('section1')}>Home</MenuItem>
            <MenuItem onClick={() => scrollToSection('section2')}>Quem somos nós</MenuItem>
            <MenuItem onClick={() => scrollToSection('section3')}>Serviços</MenuItem>
            <MenuItem onClick={() => scrollToSection('section4')}>Contato</MenuItem>
            </div>
        </MenuContainer>
    );
};

export default Menu;

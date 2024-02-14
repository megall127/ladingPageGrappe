import React from 'react';
import styled from 'styled-components';
import grapeNexus from "../src/Assets/grapeNexus.png"

const MenuContainer = styled.div`
  background-color: transparent;
  color: white;
  height: 200px;    
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const MenuItem = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
`;

const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};

const Menu = () => {
    return (
        <MenuContainer>
            <div style={{width: '50%'}}>
                <img style={{height: 200, width: 200, marginRight: "50%"}} src={grapeNexus}></img>
            </div>
            <div style={{width: '50%', height: '100%', display: "flex"}}>
            <MenuItem onClick={() => scrollToSection('section1')}>Home</MenuItem>
            <MenuItem onClick={() => scrollToSection('section2')}>Quem somos nós</MenuItem>
            <MenuItem onClick={() => scrollToSection('section3')}>Serviços</MenuItem>
            <MenuItem onClick={() => scrollToSection('section4')}>Contato</MenuItem>
            </div>
        </MenuContainer>
    );
};

export default Menu;

import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 500px;
`;

const Section4 = ({ color, title }) => {
  return (
    <SectionContainer bgColor={color}>
      <h2>{title}</h2>
    </SectionContainer>
  );
};

export default Section4;

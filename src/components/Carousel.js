import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const CarouselInner = styled.div`
  display: flex;
  width: ${props => 100 * React.Children.count(props.children)}%;
  transition: transform 0.5s ease;
`;

const CarouselItem = styled.div`
  flex: 0 0 ${props => 100 / React.Children.count(props.children)}%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AutoCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % React.Children.count(children));
    }, 5000); // Muda de item a cada 2 segundos

    return () => clearInterval(interval);
  }, [children]);

  return (
    <CarouselContainer>
      <CarouselInner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child) => (
          <CarouselItem>{child}</CarouselItem>
        ))}
      </CarouselInner>
    </CarouselContainer>
  );
};

export default AutoCarousel;

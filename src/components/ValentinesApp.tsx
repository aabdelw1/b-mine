import React, { useState } from 'react';
import styled from 'styled-components';
import { noButtonTexts } from '../utils/noTexts';

interface ButtonProps {
  $isYesButton?: boolean;
  $isNoButton?: boolean;
  $padding?: number;
  $fontSize?: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Question = styled.h2`
  margin-bottom: 20px;
`;

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.$isYesButton ? '#4CBB17' : 'red')};
  color: white;
  border: none;
  border-radius: 5px;
  padding: ${(props) =>
    props.$isYesButton
      ? `${props.$padding}px ${props.$padding! + 15}px`
      : '10px 30px'};
  font-size: ${(props) =>
    props.$isYesButton ? `${props.$fontSize}px` : '25px'};
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    margin-top: ${(props) => (!props.$isYesButton ? '20px' : '0')};
  }

  @media (max-width: 768px) {
    margin-bottom: ${(props) => (!props.$isNoButton ? '20px' : '0')};
  }
`;

const ValentineApp: React.FC = () => {
  const [yesButtonStyle, setYesButtonStyle] = useState<{
    $padding: number;
    $fontSize: number;
  }>({
    $padding: 10,
    $fontSize: 25,
  });

  const [noButtonTextIndex, setNoButtonTextIndex] = useState<number>(0);
  const [isAccepted, setIsAccepted] = useState<boolean>(false);
  const [clickCount, setClickCount] = useState<number>(0);

  const handleNoClick = (): void => {
    setYesButtonStyle((prevStyle) => ({
      $padding: prevStyle.$padding + 5,
      $fontSize: prevStyle.$fontSize + 5,
    }));
    setClickCount((prev) => prev + 1);
    setNoButtonTextIndex((prevIndex) => (prevIndex + 1) % noButtonTexts.length);
  };

  const handleYesClick = (): void => {
    setIsAccepted(true);
  };

  if (isAccepted) {
    return (
      <Container>
        <img src="/assets/images/yay.gif" alt="Celebration" />
      </Container>
    );
  }

  return (
    <Container>
      <img
        src="/assets/images/rose-cute.gif"
        alt="Cute rose"
        style={{ marginBottom: '1px' }}
      />

      <Question>Will you be my valentine?</Question>
      <div>
        <Button
          $isYesButton
          $padding={yesButtonStyle.$padding}
          $fontSize={yesButtonStyle.$fontSize}
          onClick={handleYesClick}
        >
          Yes
        </Button>
        {clickCount <= noButtonTexts.length - 1 && (
          <Button
            onClick={handleNoClick}
            style={{ marginTop: '10px' }}
            $isNoButton
          >
            {noButtonTexts[noButtonTextIndex]}
          </Button>
        )}
      </div>
    </Container>
  );
};

export default ValentineApp;

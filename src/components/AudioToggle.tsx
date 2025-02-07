import React, { useState, useRef, useEffect, JSX } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const AudioToggle = (): JSX.Element => {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current
          .play()
          .catch((error) => console.warn('Playback issue:', error));
        setIsMuted(false);
        document.removeEventListener('click', handleUserInteraction);
      }
    };

    document.addEventListener('click', handleUserInteraction);
    return () => document.removeEventListener('click', handleUserInteraction);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      audioRef.current.muted = newMutedState;

      if (!newMutedState) {
        audioRef.current
          .play()
          .catch((error) => console.warn('Playback issue:', error));
      }
    }
  };

  return (
    <Container onClick={toggleAudio}>
      <audio ref={audioRef} loop muted>
        <source src="/assets/audio/forever.mp3" type="audio/mpeg" />
      </audio>

      <Icon
        src={
          isMuted
            ? '/assets/icons/icons8-no-audio-100.svg'
            : '/assets/icons/icons8-audio-100.svg'
        }
        alt="Toggle Audio"
      />
    </Container>
  );
};

export default AudioToggle;

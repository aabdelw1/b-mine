import React, { useState, useRef, useEffect } from "react";

const AudioToggle = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.warn("Autoplay prevented:", error);
      });
    }
  }, []);

  const toggleAudio = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  return (
    <div style={styles.container} onClick={toggleAudio}>
      <audio ref={audioRef} autoPlay loop>
        <source src="/forever.mp3" type="audio/mpeg" />
      </audio>
      <img
        src={isMuted ? "/icons8-no-audio-100.svg" : "/icons8-audio-100.svg"}
        alt="Toggle Audio"
        style={styles.icon}
      />
    </div>
  );
};

const styles = {
  container: {
    position: "absolute",
    top: "20px",
    right: "20px",
    cursor: "pointer",
  },
  icon: {
    width: "40px",
    height: "40px",
  },
};

export default AudioToggle;

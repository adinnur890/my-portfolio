import React, { useState, useRef, useEffect } from 'react';
import { FaMusic, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  const musicUrl = "/music/Nadhif Basalamah - bergema sampai selamanya (Official Lyric Video).mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} preload="metadata">
        <source src={musicUrl} type="audio/mp3" />
        <source src={musicUrl.replace('.mp3', '.ogg')} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
      
      <button onClick={toggleMusic} className="music-toggle">
        <FaMusic className={`music-icon ${isPlaying ? 'playing' : ''}`} />
      </button>
      
      <div className="volume-control">
        {volume > 0 ? <FaVolumeUp /> : <FaVolumeMute />}
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
      </div>
    </div>
  );
};

export default BackgroundMusic;
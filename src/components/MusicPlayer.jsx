import React from 'react';
import './MusicPlayer.css';

const MusicPlayer = ({ track }) => {
  return (
    <div className="music-player">
      <img src={track.artwork} alt={track.title} />
      <div>
        <h3>{track.title}</h3>
        <p>{track.artist}</p>
        <audio controls>
          <source src={track.url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default MusicPlayer;

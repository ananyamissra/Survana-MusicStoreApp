import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

export const Player = ({ fn, song }) => {
  return (
    <div>
      <p>
        <button onClick={() => fn(false, null)} className="btn btn-success">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back to the Songs
        </button>
        <br />
      </p>
      <div className="alert alert-info" style={{ backgroundColor: '#e6e6fa', borderColor: '#d8bfd8' }}>
        <div className="d-flex align-items-center mb-3">
          <img src={song.artworkUrl100} alt="Not able to load" style={{ maxWidth: '80px', margin: '20px' }} />
          <div className="ml-3">
            <h5 className="mb-0" style={{ color: '#800080', fontFamily: 'Arial, sans-serif' }}>
              {song?.trackName}
            </h5>
            <p className="mb-0" style={{ color: '#4b0082', fontFamily: 'Arial, sans-serif' }}>
              {song?.artistName}
            </p>
          </div>
        </div>
        <audio controls src={song?.previewUrl}></audio>
      </div>
    </div>
  );
};

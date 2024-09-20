import React from 'react';

export const Song = ({ fn, song }) => {
  const showPlayer = () => {
    fn(true, song);
  };

  return (
    <div className="row">
      <div className="col-4">
        <div className="text-center">
          <br />
          <img src={song.artworkUrl100} alt="Not able to load" style={{ maxWidth: '100px' }} />
          <br />
        </div>
      </div>
      <div className="col-4">
        <div className="text-center">
          <br />
          <h6 style={{ color: '#800080', fontFamily: 'Arial, sans-serif' }}>{song.trackName}</h6>
          <p className="mb-0" style={{ color: '#4b0082', fontFamily: 'Arial, sans-serif' }}>
            {song.artistName}
          </p>
          <br />
        </div>
      </div>
      <div className="col-4">
        <div className="text-center">
          <br />
          <button onClick={showPlayer} className="btn btn-primary" style={{ backgroundColor: '#8a2be2', borderColor: '#8a2be2' }}>
            Play Song
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

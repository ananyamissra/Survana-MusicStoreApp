import React from 'react';
import { Song } from './Song';

export const Songs = ({ fn, allSongs }) => {
  return (
    <div className="mt-4">
      {allSongs.map((currentSong, index) => (
        <Song fn={fn} key={index} song={currentSong} />
      ))}
    </div>
  );
};

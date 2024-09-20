import React, { useEffect, useState } from 'react';
import { Search } from '../components/Search';
import { Songs } from '../components/Songs';
import { getSongs } from '../services/api-client';
import { Player } from '../components/Player';

export const SearchPage = () => {
  const [allSongs, setSongs] = useState([]);
  const [flag, setFlag] = useState(false);
  const [song, setPlayerSong] = useState(null);

  const loadSongs = async () => {
    setSongs(await getSongs('Top Bollywood Songs'));
  };

  useEffect(() => {
    loadSongs();
  }, []);

  const togglePlayer = (flag, songarg) => {
    setPlayerSong(songarg);
    setFlag(flag);
  };

  const getArtistName = async (artistName) => {
    setSongs(await getSongs(artistName));
  };

  const jsx = (
    <>
      <Search fn={getArtistName} />
      <Songs fn={togglePlayer} allSongs={allSongs} />
    </>
  );

  return (
    <div className="container">
      <h1
        className="alert alert-info text-center"
        style={{
          backgroundColor: '#6a1b9a',
          color: '#fff',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Survana - A Musical Nirvana
      </h1>

      {flag ? (
        <Player fn={togglePlayer} song={song} />
      ) : (
        <div style={{ backgroundColor: '#f3e5f5', padding: '20px', borderRadius: '10px' }}>{jsx}</div>
      )}

      <footer className="text-center mt-5">
        <p style={{ fontFamily: 'Arial, sans-serif', color: '#777' }}>
          Made with <span style={{ color: '#f50057' }}>&#10084;</span> by Ananya Mishra
        </p>
      </footer>
    </div>
  );
};
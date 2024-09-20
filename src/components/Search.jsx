import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Search = ({ fn }) => {
  const artist = useRef();

  const handleSearch = () => {
    fn(artist.current.value);
  };

  return (
    <div className="alert alert-info" style={{ backgroundColor: '#e6e6fa', borderColor: '#d8bfd8' }}>
      <div className="input-group">
        <input ref={artist} type="text" className="form-control" placeholder="Search for songs or artists" style={{ borderColor: '#800080' }} />
        <div className="input-group-append">
          <button className="btn btn-success" onClick={handleSearch} style={{ backgroundColor: '#8a2be2', borderColor: '#8a2be2' }}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

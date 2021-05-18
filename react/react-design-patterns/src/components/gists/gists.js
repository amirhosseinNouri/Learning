import React, { useState, useEffect } from 'react';

export default function Gists() {
  const [gists, setGists] = useState([]);

  const handleFetchGists = async () => {
    const response = await fetch(
      'https://api.github.com/users/amirhosseinnouri/gists',
    );
    const json = await response.json();
    setGists(json);
  };

  useEffect(() => {
    handleFetchGists();
  }, []);

  return (
    <div>
      {gists.map((gist) => (
        <h4 key={gist.id}>{gist.description}</h4>
      ))}
    </div>
  );
}

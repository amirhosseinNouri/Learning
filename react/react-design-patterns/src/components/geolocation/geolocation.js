import React, { useState, useEffect } from 'react';

export default function GeoLocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleGeoLocation, handleError);
    }
  }, []);

  const handleGeoLocation = ({ coords }) => {
    const { latitude, longitude } = coords;
    setLatitude(latitude);
    setLongitude(longitude);
  };

  const handleError = (error) => {
    console.error('Error Code = ' + error.code + ' - ' + error.message);
  };

  return (
    <div>
      <h2>lat : {latitude}</h2>
      <h2>long : {longitude}</h2>
    </div>
  );
}

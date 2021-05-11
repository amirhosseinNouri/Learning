import React, { useState, useEffect } from 'react';
import Geolocation from '../../components/geolocation';

export default function GeoLocationContainer() {
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

  return <Geolocation latitude={latitude} longitude={longitude} />;
}

import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

const GoogleMapComponent = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      // Additional map setup if needed
    }
  }, [map]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={map => setMap(map)}
      />
    </LoadScript>
  );
}

export default GoogleMapComponent;
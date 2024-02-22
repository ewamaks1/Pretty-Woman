import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { defaultCenter } from "../Constants/Constants";
import { API_KEY } from "../Constants/Constants";

const MapComponent: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        center={defaultCenter}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;

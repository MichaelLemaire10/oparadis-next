import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Leaflet = ({ style, zoom, coordinates }) => {

  const latArray = coordinates.map((c) => c.latitude);
  const lngArray = coordinates.map((c) => c.longitude);

  const latMin = latArray.sort();
  // const latMax = latArray.reverse();

  // const lngMin = lngArray.sort();
  const lngMax = lngArray.reverse();

  return (
    <MapContainer
      center={[latMin[0], lngMax[0]]}
      zoom={zoom}
      scrollWheelZoom={true}
      className={style}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {coordinates.map(({ id, city, latitude, longitude }) => (
        <Marker
          key={id}
          position={[latitude, longitude]}
        >
          <Popup>{city}</Popup>
        </Marker>))}
    </MapContainer>
  );
};

export default Leaflet;

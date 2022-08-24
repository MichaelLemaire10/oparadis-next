import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Leaflet = ({ style, zoom, coordinates }) => {

  // const latArray = coordinates.map((c) => c.lat);
  // const lngArray = coordinates.map((c) => c.lng);

  // const latMin = latArray.sort();
  // const latMax = latArray.reverse();

  // const lngMin = lngArray.sort();
  // const lngMax = lngArray.reverse();

  return (
    <MapContainer
      center={[48.8280860580554, 2.3770285030841976]}
      zoom={zoom}
      scrollWheelZoom={true}
      className={style}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {coordinates.map(({ id, city, lat, lng }) => (
        <Marker
          key={id}
          position={[lat, lng]}
        >
          <Popup>{city}</Popup>
        </Marker>))}
    </MapContainer>
  );
};

export default Leaflet;

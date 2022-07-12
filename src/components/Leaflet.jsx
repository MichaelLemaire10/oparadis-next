import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Leaflet = ({style, zoom}) => {
  return (
      <MapContainer
        center={[48.856614, 2.3522219]}
        zoom={zoom}
        scrollWheelZoom={true}
        className={style}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[48.856614, 2.3522219]}
        >
          <Popup>Hey ! you found me</Popup>
        </Marker>
      </MapContainer>
  );
};

export default Leaflet;

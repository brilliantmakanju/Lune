import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const MapCont = () => {
  return (
    <MapContainer
      center={[40.8054, -74.0241]}
      zoom={100}
      scrollWheelZoom={false}
      className="w-full h-[30rem] lg:h-[45rem] outline-none "
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[40.8054, -74.0241]} draggable={false} animate={true}>
      </Marker>
    </MapContainer>
  );
};

export default MapCont;

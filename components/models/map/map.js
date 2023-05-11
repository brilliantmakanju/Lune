import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const MapCont = () => {
  return (
    <MapContainer
      center={[40.8054, -74.0241]}
      zoom={14}
      scrollWheelZoom={false}
      className="w-full h-[10rem] "
    >
      <Marker
        position={[40.8054, -74.0241]}
        draggable={true}
        animate={true}
      ></Marker>
    </MapContainer>
  );
};

export default MapCont;

import {React, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const icon = L.icon({
    iconUrl: "./placeholder.png",
    iconSize: [48, 38],
  });

const position = [28.6139, 77.2090];

function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [selectPosition]);

  return null;
}


export default function Maps(props) {
  const { selectPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];
  return (
    <MapContainer center={position} zoom={13} style={{ width: '100%', height: '100%' }}>
      {/* OpenStreetMap TileLayer */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Google Streets TileLayer */}
      <TileLayer
        attribution='&copy; Google'
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        maxZoom={20}
        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
      />

{selectPosition && (
        <Marker position={locationSelection} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  );
}

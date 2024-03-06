import React, { useEffect } from 'react';

import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
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

  const handleMapClick = (e) => {
    console.log("Latitude:", e.latlng.lat);
    console.log("Longitude:", e.latlng.lng);
  };

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
      {/* Listen for map click event */}
      <UseMapClick />
    </MapContainer>
  );
}

let firstMarker, secondMarker;

function UseMapClick() {
  const map = useMapEvent('click', (e) => {
    const { latlng } = e;
    if (!firstMarker) {
      firstMarker = L.marker(latlng, { icon }).addTo(map);
    } else if (!secondMarker) {
      secondMarker = L.marker(latlng, { icon }).addTo(map);
      // Routing between the first two markers
      L.Routing.control({
        waypoints: [
          L.latLng(firstMarker.getLatLng()),
          L.latLng(secondMarker.getLatLng())
        ],
        lineOptions: {
          styles: [{ color: '#00ff00', weight: 5 }]
        },
        createMarker: function (i, waypoint, n) {
          // The icons for start and end markers
          if (i === 0) {
            return L.marker(waypoint.latLng, {
              icon: L.icon({
                iconUrl: './placeholder.png',
                iconSize: [48, 38]
              })
            });
          } else if (i === n - 1) {
            return L.marker(waypoint.latLng, {
              icon: L.icon({
                iconUrl: './placeholder.png',
                iconSize: [48, 38]
              })
            });
          }
          return null;
        }
      }).addTo(map);
    }
  });

  return null;
}

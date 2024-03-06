
import React, { useState } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import 'leaflet/dist/leaflet.css';

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

export default function SearchBox(props) {
  const { selectPosition, setSelectPosition } = props;
  const [fromSearchText, setFromSearchText] = useState("");
  const [toSearchText, setToSearchText] = useState("");
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [fromListPlace, setFromListPlace] = useState([]);
  const [toListPlace, setToListPlace] = useState([]);

  const handleSearch = (searchText, setSearchText, setListPlace) => {
    const params = {
      q: searchText,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
    };
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        setListPlace(JSON.parse(result));
      })
      .catch((err) => console.log("err: ", err));
  };


  const handleLocationSelection = (location, isFrom) => {
    if (isFrom) {
      setFromLocation(location);
    } else {
      setToLocation(location);
    }

    // Update selectPosition state with the selected location's coordinates
    setSelectPosition((prev) => ({
      ...prev,
      lat: isFrom ? location.lat : prev.lat,
      lon: isFrom ? location.lon : location.lon,
    }));
  };

  

  const handleRouteDisplay = () => {
    console.log("fromLocation: ", fromLocation);
    console.log("toLocation: ", toLocation);
    if (fromLocation && toLocation && selectPosition.map) { // Ensure map is initialized
      console.log("fromLocation: ", fromLocation);
      console.log("toLocation: ", toLocation);
      const waypoints = [
        L.latLng(fromLocation.lat, fromLocation.lon),
        L.latLng(toLocation.lat, toLocation.lon),
      ];
  
      L.Routing.control({
        waypoints,
      }).addTo(selectPosition.map);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", marginBottom: 10 }}>
        <OutlinedInput
          style={{ flex: 1, marginRight: 10 }}
          placeholder="From"
          value={fromSearchText}
          onChange={(event) => setFromSearchText(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSearch(fromSearchText, setFromSearchText, setFromListPlace)}
        >
          Search From
        </Button>
      </div>
      <List component="nav" aria-label="from location search results">
        {fromListPlace.map((item) => (
          <div key={item.place_id}>
            <ListItem
              button
              onClick={() => handleLocationSelection(item, true)}
            >
              <ListItemIcon>
                <img
                  src="./placeholder.png"
                  alt="Placeholder"
                  style={{ width: 38, height: 38 }}
                />
              </ListItemIcon>
              <ListItemText primary={item.display_name} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      <div style={{ display: "flex", marginBottom: 10 }}>
        <OutlinedInput
          style={{ flex: 1, marginRight: 10 }}
          placeholder="To"
          value={toSearchText}
          onChange={(event) => setToSearchText(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSearch(toSearchText, setToSearchText, setToListPlace)}
        >
          Search To
        </Button>
      </div>
      <List component="nav" aria-label="to location search results">
        {toListPlace.map((item) => (
          <div key={item.place_id}>
            <ListItem
              button
              onClick={() => handleLocationSelection(item, false)}
            >
              <ListItemIcon>
                <img
                  src="./placeholder.png"
                  alt="Placeholder"
                  style={{ width: 38, height: 38 }}
                />
              </ListItemIcon>
              <ListItemText primary={item.display_name} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        disabled={!fromLocation || !toLocation}
        onClick={handleRouteDisplay}
      >
        Show Route
      </Button>
    </div>
  );
}

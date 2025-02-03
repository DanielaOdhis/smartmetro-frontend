import React, { useRef, useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import './Tracking.css';
import io from 'socket.io-client';

// Set up the initial map center and zoom level
const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -1.286389, // Example latitude for Nairobi, Kenya
  lng: 36.817223  // Example longitude for Nairobi, Kenya
};

const Tracking = () => {
  const mapRef = useRef(null);  // Ref for the map instance
  const [buses, setBuses] = useState([]);  // Store bus data
  const [isError, setIsError] = useState(false);  // State to handle error
  const [socket, setSocket] = useState(null);
  const [mapType, setMapType] = useState("roadmap"); // Default map type is "roadmap"
  const [routeDirection, setRouteDirection] = useState("Nairobi-Juja"); // Default direction

  // Fetch buses from the server API based on direction
  const fetchBuses = async (direction) => {
    try {
      const response = await fetch(`http://localhost:5000/api/buses?direction=${direction}`);
      const data = await response.json();
      setBuses(data);
    } catch (error) {
      setIsError(true);
    }
  };

  // Fetch buses on component mount and on direction change
  useEffect(() => {
    fetchBuses(routeDirection);

    // Set up Socket.IO for real-time updates
    const socketInstance = io("http://localhost:5000");
    setSocket(socketInstance);

    socketInstance.on("bus-location-update", (data) => {
      setBuses((prevBuses) =>
        prevBuses.map((bus) => (bus.id === data.id ? { ...bus, ...data } : bus))
      );
    });

    return () => {
      if (socketInstance) socketInstance.disconnect();
    };
  }, [routeDirection]);

  // Render fallback UI if there's an error
  if (isError) {
    return <div>Error: Failed to load the map.</div>;
  }

  const addTrafficLayer = (map) => {
    if (window.google && window.google.maps) {
      const trafficLayer = new window.google.maps.TrafficLayer();
      trafficLayer.setMap(map);
    } else {
      console.error("Google Maps is not loaded yet.");
    }
  };

  // Function to handle map type toggle
  const handleMapTypeChange = (type) => {
    setMapType(type);
  };

  // Handle route direction change
  const handleDirectionChange = (direction) => {
    setRouteDirection(direction); // Update route direction
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">SMART METRO</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/tracking">Tracking</a>
          <a href="/about">About</a>
          <a href="/feedback">Feedback</a>
        </nav>
        <div className="profile">
          <i className="user-icon">👤</i>
        </div>
      </header>

      <main className="main-content">
        <div className="map-container" style={{ width: '60%' }}>
          <h2>{routeDirection} Route</h2>

          <div className="map-controls">
            <button onClick={() => handleMapTypeChange("roadmap")}>Roadmap</button>
            <button onClick={() => handleMapTypeChange("satellite")}>Satellite</button>
            <button onClick={() => handleMapTypeChange("terrain")}>Terrain</button>
          </div>

          <div className="route-toggle">
            <button onClick={() => handleDirectionChange("Nairobi-Juja")}>Nairobi to Juja</button>
            <button onClick={() => handleDirectionChange("Juja-Nairobi")}>Juja to Nairobi</button>
          </div>

          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            onLoad={() => console.log("Google Maps API Loaded")}
            onError={() => console.error("Failed to load Google Maps API")}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={12}
              mapTypeId={mapType} // Set map type here
              onLoad={(mapInstance) => {
                mapRef.current = mapInstance;
                addTrafficLayer(mapInstance);  // Add the traffic layer once the map is loaded
              }}
            >
              {buses.map((bus) => (
                <Marker
                  key={bus.id}
                  position={{ lat: bus.latitude, lng: bus.longitude }}
                  label={bus.number}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="bus-list" style={{ width: '40%' }}>
          <h2>Upcoming Buses on {routeDirection} Route</h2>
          <ul>
            {buses.map((bus) => (
              <li key={bus.id}>
                <strong>{bus.number}</strong>
                <div>Current Location: {bus.current_stop}</div>
                <div>Next Stop: {bus.next_stop}</div>
                <div>Estimated Arrival Time: {bus.estimated_arrival_time}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Traffic Legend at Bottom */}
        <div className="traffic-legend-bottom">
          <h3>Traffic Legend</h3>
          <ul>
            <li>
              <span className="legend-color" style={{ backgroundColor: 'green' }}></span>
              <span>Clear Traffic</span>
            </li>
            <li>
              <span className="legend-color" style={{ backgroundColor: 'orange' }}></span>
              <span>Moderate Traffic</span>
            </li>
            <li>
              <span className="legend-color" style={{ backgroundColor: 'red' }}></span>
              <span>Heavy Traffic</span>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <ul>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        <div className="social-icons">
          <i className="facebook">F</i>
          <i className="twitter">T</i>
        </div>
      </footer>
    </div>
  );
};

export default Tracking;

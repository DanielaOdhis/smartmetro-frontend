import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import About from './About'; // Import the About component
import Tracking from './Tracking'; // Import the Tracking component

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/about" element={<About />} /> {/* Use element instead of component */}
        <Route path="/tracking" element={<Tracking />} /> {/* Use element instead of component */}
        {/* Other routes */}
      </Routes>
    </Router>
=======
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
          <h2>Nairobi-Juja Route</h2>
          
          <div className="map-controls">
            <button onClick={() => handleMapTypeChange("roadmap")}>Roadmap</button>
            <button onClick={() => handleMapTypeChange("satellite")}>Satellite</button>
            <button onClick={() => handleMapTypeChange("terrain")}>Terrain</button>
          </div>

          <LoadScript
            googleMapsApiKey=""
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
          <h2>Upcoming Buses on Nairobi-Juja Route</h2>
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
>>>>>>> 6868b606813bf6085beb772975524b2ec9b5ba3b
  );
}

export default App;

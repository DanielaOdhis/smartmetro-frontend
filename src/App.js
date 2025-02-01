import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import About from './About'; // Import the About component
import Tracking from './Tracking'; // Import the Tracking component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} /> {/* Use element instead of component */}
        <Route path="/tracking" element={<Tracking />} /> {/* Use element instead of component */}
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;

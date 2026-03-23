import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dataset from './pages/Dataset';
import Model from './pages/Model';
import Prediction from './pages/Prediction';
import Results from './pages/Results';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dataset" element={<Dataset />} />
            <Route path="/model" element={<Model />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2026 Automated Disease Classification from Histopathology Images. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

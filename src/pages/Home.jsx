import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home fade-in">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Automated Disease Classification from Histopathology Images
          </h1>
          <p className="hero-subtitle">
            Leveraging Deep Learning and Convolutional Neural Networks (CNN) 
            to analyze tissue samples and classify them as Benign or Malignant
          </p>
          <div className="hero-buttons">
            <Link to="/prediction" className="btn btn-accent">Try Prediction</Link>
            <Link to="/model" className="btn btn-secondary">Learn About Model</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">About This Project</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">🎯 Objective</h3>
            <p className="card-text">
              To develop an automated system that can accurately classify histopathology images 
              into benign or malignant categories using state-of-the-art deep learning techniques.
              This assists pathologists in making faster and more accurate diagnoses.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">🔬 Technology</h3>
            <p className="card-text">
              Our system uses Convolutional Neural Networks (CNNs), a class of deep neural networks 
              particularly effective for image analysis. The model has been trained on thousands of 
              histopathology images to recognize patterns indicative of cancerous cells.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Image Acquisition</h3>
              <p>Histopathology slides are scanned and converted into high-resolution digital images</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Preprocessing</h3>
              <p>Images undergo normalization, noise reduction, and quality enhancement</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Feature Extraction</h3>
              <p>CNN automatically learns hierarchical features from the tissue images</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Classification</h3>
              <p>The model classifies the tissue as Benign or Malignant with confidence scores</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🤖 Deep Learning Based</h3>
            <p>Powered by advanced CNN architectures for superior accuracy</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Fast Analysis</h3>
            <p>Get predictions in seconds, enabling rapid diagnosis</p>
          </div>
          <div className="feature-card">
            <h3>📊 High Accuracy</h3>
            <p>Trained on diverse datasets for robust performance</p>
          </div>
          <div className="feature-card">
            <h3>🎯 Reliable Results</h3>
            <p>Provides confidence scores for informed decision-making</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

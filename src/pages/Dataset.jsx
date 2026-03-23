import './Dataset.css';

function Dataset() {
  return (
    <div className="dataset fade-in">
      <h1 className="page-title">Dataset Information</h1>
      <p className="page-subtitle">
        Comprehensive histopathology image datasets for training and validation
      </p>

      <section className="section">
        <div className="dataset-intro card">
          <h2 className="card-title">📊 About Our Dataset</h2>
          <p className="card-text">
            Our model is trained on a comprehensive collection of histopathology images 
            sourced from medical institutions and public databases. The dataset includes 
            tissue samples from various organs and body parts, carefully annotated by 
            expert pathologists to ensure accuracy and reliability.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Dataset Statistics</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Total Images</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5,200</div>
            <div className="stat-label">Benign Samples</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4,800</div>
            <div className="stat-label">Malignant Samples</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">95%</div>
            <div className="stat-label">Class Balance</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Data Categories</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">🔬 Benign Tissues</h3>
            <p className="card-text">
              Non-cancerous tissue samples showing normal cell structures and organization.
              These images serve as the negative class in our binary classification task.
            </p>
            <ul className="feature-list">
              <li>Normal cell morphology</li>
              <li>Organized tissue structure</li>
              <li>Uniform cell size and shape</li>
              <li>Regular nuclear features</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="card-title">⚠️ Malignant Tissues</h3>
            <p className="card-text">
              Cancerous tissue samples exhibiting abnormal characteristics such as 
              irregular cell structures, increased nuclear-to-cytoplasmic ratios, and 
              disorganized tissue architecture.
            </p>
            <ul className="feature-list">
              <li>Abnormal cell morphology</li>
              <li>Disorganized tissue structure</li>
              <li>Pleomorphic cells</li>
              <li>Irregular nuclear features</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Data Sources</h2>
        <div className="sources-grid">
          <div className="source-card">
            <h3>🏥 Medical Institutions</h3>
            <p>Collaborations with hospitals and pathology labs providing real-world clinical samples</p>
          </div>
          <div className="source-card">
            <h3>📚 Public Databases</h3>
            <p>Integration with established medical imaging repositories like TCIA and BreakHis</p>
          </div>
          <div className="source-card">
            <h3>🔬 Research Partners</h3>
            <p>Contributions from academic and research institutions worldwide</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Data Preprocessing</h2>
        <div className="preprocessing-steps">
          <div className="process-step">
            <div className="process-icon">🎨</div>
            <h3>Color Normalization</h3>
            <p>Standardizing stain variations across different slides and scanners</p>
          </div>
          <div className="process-step">
            <div className="process-icon">✂️</div>
            <h3>Image Cropping</h3>
            <p>Extracting regions of interest at standardized resolutions</p>
          </div>
          <div className="process-step">
            <div className="process-icon">🔄</div>
            <h3>Data Augmentation</h3>
            <p>Applying rotations, flips, and color adjustments to increase diversity</p>
          </div>
          <div className="process-step">
            <div className="process-icon">🔍</div>
            <h3>Quality Control</h3>
            <p>Removing low-quality or ambiguous samples through expert review</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Ethical Considerations</h2>
        <div className="card">
          <p className="card-text">
            All patient data has been anonymized and de-identified in compliance with HIPAA 
            regulations. The dataset usage follows ethical guidelines for medical research, 
            and all samples are used with appropriate consent and institutional approval.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Dataset;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Prediction.css';

function Prediction() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      alert('Please select a valid image file');
    }
  };

  const onFileInputChange = (event) => {
    handleFileSelect(event.target.files[0]);
  };

  const onDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const handlePredict = async () => {
    if (!selectedImage) {
      alert('Please select an image first');
      return;
    }

    setIsProcessing(true);

    // Simulate prediction process
    setTimeout(() => {
      setIsProcessing(false);
      // Navigate to results page with mock data
      navigate('/results', { 
        state: {
          image: previewUrl,
          prediction: Math.random() > 0.5 ? 'Malignant' : 'Benign',
          confidence: (Math.random() * (0.99 - 0.85) + 0.85).toFixed(2),
          timestamp: new Date().toISOString()
        }
      });
    }, 2000);
  };

  const handleReset = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  return (
    <div className="prediction fade-in">
      <h1 className="page-title">Disease Prediction</h1>
      <p className="page-subtitle">
        Upload a histopathology image to get an automated classification
      </p>

      <section className="section">
        <div className="prediction-container">
          <div className="upload-section">
            <div 
              className={`upload-area ${isDragging ? 'drag-active' : ''} ${previewUrl ? 'has-image' : ''}`}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
            >
              {!previewUrl ? (
                <>
                  <div className="upload-icon">📤</div>
                  <h3>Upload Your Image</h3>
                  <p>Drag and drop your histopathology image here</p>
                  <p className="upload-or">or</p>
                  <label className="btn btn-primary">
                    Browse Files
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={onFileInputChange}
                      style={{ display: 'none' }}
                    />
                  </label>
                  <p className="upload-hint">
                    Supported formats: JPG, PNG, DICOM (Max 10MB)
                  </p>
                </>
              ) : (
                <div className="image-preview">
                  <img src={previewUrl} alt="Preview" className="preview-image" />
                  <button className="btn btn-secondary btn-sm" onClick={handleReset}>
                    Remove Image
                  </button>
                </div>
              )}
            </div>
          </div>

          {previewUrl && (
            <div className="prediction-actions">
              <button 
                className="btn btn-accent btn-large" 
                onClick={handlePredict}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <span className="spinner"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    🔍 Analyze Image
                  </>
                )}
              </button>
            </div>
          )}

          <div className="instructions-card">
            <h3>📋 How to Use</h3>
            <ol className="instruction-list">
              <li>Upload a histopathology tissue image (JPG or PNG format)</li>
              <li>Ensure the image is clear and properly focused</li>
              <li>Click "Analyze Image" to start the prediction</li>
              <li>View the classification result and confidence score</li>
            </ol>
            
            <div className="important-note">
              <strong>⚠️ Important:</strong> This tool is for research and educational purposes only. 
              Always consult with qualified medical professionals for clinical diagnosis.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Prediction;

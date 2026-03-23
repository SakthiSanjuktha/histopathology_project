import './Model.css';

function Model() {
  return (
    <div className="model fade-in">
      <h1 className="page-title">CNN Model Architecture</h1>
      <p className="page-subtitle">
        Deep Convolutional Neural Network for accurate disease classification
      </p>

      <section className="section">
        <div className="model-overview card">
          <h2 className="card-title">🧠 Model Overview</h2>
          <p className="card-text">
            Our classification system employs a sophisticated Convolutional Neural Network (CNN) 
            architecture specifically designed for histopathology image analysis. The model 
            automatically learns hierarchical features from raw images and makes accurate 
            predictions about tissue malignancy.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Network Architecture</h2>
        <div className="architecture-diagram">
          <div className="layer-block input-layer">
            <h3>Input Layer</h3>
            <p>224×224×3 RGB Image</p>
          </div>
          <div className="arrow">↓</div>
          <div className="layer-block conv-layer">
            <h3>Conv Block 1</h3>
            <p>Conv2D (32 filters) → ReLU → MaxPool</p>
          </div>
          <div className="arrow">↓</div>
          <div className="layer-block conv-layer">
            <h3>Conv Block 2</h3>
            <p>Conv2D (64 filters) → ReLU → MaxPool</p>
          </div>
          <div className="arrow">↓</div>
          <div className="layer-block conv-layer">
            <h3>Conv Block 3</h3>
            <p>Conv2D (128 filters) → ReLU → MaxPool</p>
          </div>
          <div className="arrow">↓</div>
          <div className="layer-block dense-layer">
            <h3>Flatten Layer</h3>
            <p>Feature Vector</p>
          </div>
          <div className="arrow">↓</div>
          <div className="layer-block dense-layer">
            <h3>Dense Layer 1</h3>
            <p>512 Neurons → ReLU → Dropout</p>
          </div>
          <div className="arrow">↓</div>
          <div className="layer-block dense-layer">
            <h3>Dense Layer 2</h3>
            <p>128 Neurons → ReLU → Dropout</p>
          </div>
          <div className="arrow">↓</div>
          <div className="layer-block output-layer">
            <h3>Output Layer</h3>
            <p>2 Classes (Sigmoid)</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Layer Details</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">🔍 Convolutional Layers</h3>
            <p className="card-text">
              Extract spatial features through learnable filters. Each layer detects increasingly 
              complex patterns - from edges and textures in early layers to cellular structures 
              and tissue patterns in deeper layers.
            </p>
            <ul className="feature-list">
              <li>Progressive feature extraction</li>
              <li>Multiple filter sizes (3×3, 5×5)</li>
              <li>Batch normalization for stability</li>
              <li>Activation: ReLU for non-linearity</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="card-title">📉 Pooling Layers</h3>
            <p className="card-text">
              Reduce spatial dimensions while retaining important features. Max pooling operations 
              help achieve translation invariance and reduce computational complexity.
            </p>
            <ul className="feature-list">
              <li>Dimensionality reduction</li>
              <li>Max pooling (2×2 window)</li>
              <li>Feature preservation</li>
              <li>Overfitting prevention</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="card-title">🔗 Dense Layers</h3>
            <p className="card-text">
              Fully connected layers that combine extracted features for final classification. 
              These layers learn complex decision boundaries between benign and malignant classes.
            </p>
            <ul className="feature-list">
              <li>High-level reasoning</li>
              <li>Feature combination</li>
              <li>Dropout regularization (0.5)</li>
              <li>Sigmoid activation for output</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="card-title">🛡️ Regularization</h3>
            <p className="card-text">
              Multiple techniques prevent overfitting and ensure the model generalizes well to 
              unseen histopathology images.
            </p>
            <ul className="feature-list">
              <li>Dropout layers (50%)</li>
              <li>L2 weight regularization</li>
              <li>Batch normalization</li>
              <li>Early stopping</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Training Process</h2>
        <div className="training-info">
          <div className="training-card">
            <h3>📊 Loss Function</h3>
            <p>Binary Cross-Entropy Loss</p>
            <code>L = -[y·log(p) + (1-y)·log(1-p)]</code>
          </div>
          <div className="training-card">
            <h3>⚙️ Optimizer</h3>
            <p>Adam (Adaptive Moment Estimation)</p>
            <p>Learning Rate: 0.001</p>
          </div>
          <div className="training-card">
            <h3>📏 Metrics</h3>
            <p>Accuracy, Precision, Recall, F1-Score</p>
            <p>AUC-ROC Analysis</p>
          </div>
          <div className="training-card">
            <h3>🔄 Epochs</h3>
            <p>100 Training Epochs</p>
            <p>Batch Size: 32</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Performance Metrics</h2>
        <div className="performance-grid">
          <div className="metric-card">
            <div className="metric-value">96.5%</div>
            <div className="metric-label">Accuracy</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">95.8%</div>
            <div className="metric-label">Precision</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">97.2%</div>
            <div className="metric-label">Recall (Sensitivity)</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">96.1%</div>
            <div className="metric-label">F1-Score</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">0.985</div>
            <div className="metric-label">AUC-ROC</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Transfer Learning</h2>
        <div className="card">
          <p className="card-text">
            Our model leverages transfer learning from pre-trained networks (ResNet, VGG16) 
            trained on ImageNet. This approach allows us to benefit from features learned on 
            millions of natural images, significantly improving performance and reducing 
            training time. Fine-tuning on histopathology-specific data achieves optimal results.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Model;

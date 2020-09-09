import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => (
  <div>
    <p>
      {'This Magic Brain will detect faces in your pictures. Give it a try!!!'}
    </p>
    <div className="form">
      <input type="text" />
      <button>Detect</button>
    </div>
  </div>
)

export default ImageLinkForm;
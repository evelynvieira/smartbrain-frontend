import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onChange, onClick }) => (
  <>
    <p>
      {'This Magic Brain will detect faces in your pictures. Give it a try!!!'}
    </p>
    <div className="center">
      <div className="form center">
        <input type="text" onChange={onChange} />
        <button onClick={onClick}>Detect</button>
      </div>
    </div>
  </>
)

export default ImageLinkForm;
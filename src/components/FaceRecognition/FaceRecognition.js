import React from 'react';

const FaceRecognition = ({ imageUrl }) => (
  <div className="center" style={{ margin: '3em' }}>
    <img id="face-recognition-image" alt='' src={imageUrl} width="500px" height="auto" />
  </div>
)

export default FaceRecognition;
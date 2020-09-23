import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import Rank from '../Rank/Rank';
import FaceRecognition from '../FaceRecognition/FaceRecognition';

class Home extends Component {
  constructor() {
    super()

    this.state = { imageUrl: '', input: '' }
  }

  onClick = () => {
    const { input } = this.state;
    this.setState({ imageUrl: input })
  }

  buildBoxRecognition = ({ topLeft, topRight, bottomLeft, bottomRight }) => {
    const element = document.getElementById('face-recognition-image');
    const width = element.width;
    const height = element.height;

    return {
      topLeft: width * topLeft,
      topRight: width * topRight,
      bottomLeft: width - (height - topLeft),
      bottomRight: width - (width - topLeft)
     }
  }

  render() {
    const { imageUrl } = this.state;

    return (
      <>
        <Logo />
        <div className="container">
          <Rank />
          <ImageLinkForm onClick={this.onClick} onChange={e => this.setState({ input: e.target.value })}/>
          <FaceRecognition imageUrl={imageUrl} />
        </div>
      </>
    )
  }
}

export default Home;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressiveImage extends Component {
  state = {
    image: this.props.preview,
    loading: true,
  };

  componentDidMount() {
    this.loadImage(this.props.src);
  }

  loadImage = src => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      this.setState({
        image: img.src,
        loading: false,
      });
    };
  };

  style = loading => {
    return {
      transition: '0.5s filter linear',
      filter: `${loading ? 'blur(50px' : ''}`,
    };
  };

  render() {
    return (
      <img
        style={this.style(this.state.loading)}
        src={this.state.image}
        alt={this.props.alt}
      />
    );
  }
}

ProgressiveImage.propTypes = {
  preview: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProgressiveImage;

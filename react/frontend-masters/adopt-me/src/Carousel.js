/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      active: 0,
    };
  }

  static getDerivedStateFromProps({ media }) {
    let photos = ['https//placecorgi.com/600/600'];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className='carousel'>
        <img src={photos[active]} alt='Animal' />
        <div className='carousel-smaller'>
          {photos.map((photo, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img
              key={index}
              onClick={this.handleClick}
              data-index={index}
              src={photo}
              className={index === active ? 'active' : ''}
              alt='Animal thumbnail'
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

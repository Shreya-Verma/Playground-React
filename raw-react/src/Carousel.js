import { Component } from 'react';

class Carousel extends Component {
  // we are able to write state here direclty
  // instead of writing in a constructor is
  // because of th ebabel configuration that we did
  state = {
    active: 0,
  };

  //is like when a compenent says that if you do not have
  //props then i have some default ones.
  // search default props
  // this property can be acesed using Carosel.defaultProps
  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index, // converting string to a number using +
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

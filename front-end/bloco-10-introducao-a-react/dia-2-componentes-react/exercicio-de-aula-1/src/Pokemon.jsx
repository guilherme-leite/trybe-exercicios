import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;

    return (
      <div className='card'>
        <p>{name}</p>
        <p>{type}</p>
        <p>{`Average weight: ${averageWeight.value}${averageWeight.measurementUnit}`}</p>
        <img src={image} alt={`An animated gif of the pokemon ${name}`}/>
      </div>
    )
  }
}

export default Pokemon;

import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className='card'>
        <span>{name}</span>
        <span>{type}</span>
        <span>{`Average weight: ${value}${measurementUnit}`}</span>
        <img src={image} alt={`An animated gif of the pokemon ${name}`}/>
      </div>
    )
  }
}

// {
//   id: 148,
//   name: "Dragonair",
//   type: 'Dragon',
//   averageWeight: {
//       value: 16.5,
//       measurementUnit: "kg"
//   },
//   image: "https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png",
//   moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
// }

export default Pokemon;

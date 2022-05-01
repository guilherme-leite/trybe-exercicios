import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <>
        <p>IMAGE</p>
        <img src={this.props.source} alt={this.props.alternativeText} />
      </>
    )
  }
}

export default Image;

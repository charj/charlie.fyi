import React, { Component } from 'react';
import Image from './Image'

export default class Images extends Component {
    render(props) {
      let imageItems;

      if(this.props.images) {
        imageItems = this.props.images.map(image => {
          return (
            <Image key={image.title} image={image} />
          )
        })
      }

        return(
          <div className="Image-gallery">
            {imageItems}
          </div>
        );
    }
}

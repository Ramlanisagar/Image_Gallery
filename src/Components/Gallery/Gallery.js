import React from 'react';

import ImageCard from '../Image_card/Image_card.js';

import './style.css';

class Gallery extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            images : [],
            currentAddress : '',
         }
    }

    onAddressChange = (e) => {
        this.setState(
            {
                currentAddress : e.target.value
            }
        )
    }

    onAddImage = () => {

        if( this.state.currentAddress === "")
        {
            return;
        }
     
        //first copy all the pre. images
        const newImages = [...this.state.images];

        //second adding the new images
        newImages.push(this.state.currentAddress)

        this.setState(
            {
                images : newImages,
                currentAddress : ''
            }
        )
    }


render = () => {

    return(
     <div className ="root-cont">
     <p className ="title"> ------Image Gallery -------</p>

     <div className = "input-box">
     <input
     onChange = {this.onAddressChange}
     value = {this.state.currentAddress}
     type = "text"
     placeholder = "enter Image Url"/>
     <button onClick = {this.onAddImage}> Add </button>
     </div>
         <div className = "list-box">
          {
            this.state.images.map( (url) => {
                  return (
                  <ImageCard 
                  Key = {`${url}-${Math.random()*10}`} 
                  imageUrl = {url} 
                  />
                         )
                                             }
                                 ) 
          }
          </div>
     </div>
    );
};

}


export default Gallery;
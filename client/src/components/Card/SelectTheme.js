import React, { useState } from 'react';
import { Card, CardGroup, Container, Badge, Image } from "react-bootstrap";
import axios from 'axios';
import ThemesShowcase from './ThemesShowcase';
import './card.css'

function SelectTheme(props) {

    const cardId = props.location.state.cardI
    const occasion = props.location.state.occasion.toLowerCase()
    const [selectedTheme, setTheme] = useState('')
 
    const handleClick = async (e) =>{
        setTheme(e.target.src)
        const cardId = props.location.state.cardId
        axios.put(`/card/${cardId}`, {
                theme: selectedTheme,
                })
            .then((response)=>{
              console.log(response.data)
          })
            .catch(error => {
                console.error('There was an error!', error);
            });
          }

    return (    
        <div> 
        <div> <h2>Select Your Background Theme </h2> </div>
        <div className='theme-showcase'> 
            <h3 bg="secondary"> Based on your selection {props.location.state.occasion} </h3>
        <CardGroup className='card-group'>
                <Image
                src={`./stockPhotos/${occasion}/${occasion}1.png`} 
                onClick={handleClick}
                className='show-case-image' />
                <Image
                src={`./stockPhotos/${occasion}/${occasion}2.png`} 
                className='show-case-image'
                onClick={handleClick}/>
                <Image
                src={`./stockPhotos/${occasion}/${occasion}3.png`} 
                className='show-case-image'
                onClick={handleClick} />
                <Image
                src={`./stockPhotos/${occasion}/${occasion}4.png`} 
                className='show-case-image'
                onClick={handleClick} />
                <Image
                src={`./stockPhotos/${occasion}/${occasion}5.png`} 
                className='show-case-image'
                onClick={handleClick}
                />
        </CardGroup>
        </div>
        </div> 
    );
  }
  
  export default SelectTheme;
  

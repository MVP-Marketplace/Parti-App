import React, { useState } from 'react';
import { Card, CardGroup, Container, Badge, Image } from "react-bootstrap";
import axios from 'axios';
import ThemesShowcase from './ThemesShowcase';


function SelectTheme(props) {

    const imageStyle = {
        width: "362", 
        height: "158"
      };
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
        
      <Container>  
            <h1>
            Select Your Background Theme 
            
            <Badge bg="secondary">   Based on your selection {props.location.state.occasion} </Badge>
        </h1>
        <CardGroup>
       
            <Card>
                <Image
                variant="bottom"
                src={`./stockPhotos/${occasion}/${occasion}1.png`} 
                width = "362"
                height = "158"
                onClick={handleClick} />
            </Card>
            <Card>
                <Card.Img 
                variant="top" 
                src={`./stockPhotos/${occasion}/${occasion}2.png`} 
                width = "362"
                height = "158"
                onClick={handleClick}/>
            </Card>
            <Card>
                <Card.Img 
                variant="top" 
                src={`./stockPhotos/${occasion}/${occasion}3.png`} 
                width = "362"
                height = "158"
                onClick={handleClick} />
            </Card>
            <Card>
                <Card.Img 
                variant="top" 
                src={`./stockPhotos/${occasion}/${occasion}4.png`} 
                width = "362"
                height = "158"
                onClick={handleClick} />
            </Card>
            <Card>
                <Card.Img 
                variant="top" 
                src={`./stockPhotos/${occasion}/${occasion}5.png`} 
                width = "362"
                height = "158"
                onClick={handleClick}
                />
            </Card>
        </CardGroup>
        
        <ThemesShowcase />
        </Container> 
    );
  }
  
  export default SelectTheme;
  

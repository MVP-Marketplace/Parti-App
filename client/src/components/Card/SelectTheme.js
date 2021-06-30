import React, { useState } from 'react';
import { Card, Button, Nav, Image, Col, Row, CardGroup, Container, CardColumns } from "react-bootstrap";
import axios from 'axios';


function SelectTheme(props) {

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

        <CardGroup>
            <Card>
                <Card.Img 
                variant="top" 
                src={`./stockPhotos/${occasion}/${occasion}1.png`} 
                width="362" 
                height="158"
                onClick={handleClick} />
            </Card>
            <Card>
                <Card.Img 
                variant="top" 
                src={`./stockPhotos/${occasion}/${occasion}2.png`} 
                width="362" 
                height="158"
                onClick={handleClick}/>
            </Card>
            <Card>
                <Card.Img 
                variant="top" 
                src={`./stockPhotos/${occasion}/${occasion}3.png`} 
                width="362" 
                height="158"
                onClick={handleClick} />
            </Card>
            <Card>
                <Card.Img 
                variant="top" 
                src={`./stockPhotos/${occasion}/${occasion}4.png`} 
                width="362"
                height="158"
                onClick={handleClick} />
            </Card>
            <Card>
                <Card.Img 
                variant="top" 
                src={`./stockPhotos/${occasion}/${occasion}5.png`} 
                width="362" 
                height="158"
                onClick={handleClick}
                />
            </Card>
        </CardGroup>
    );
  }
  
  export default SelectTheme;
  

import React, { useState } from 'react';
import { Card, Button, Nav, Image, Col, Row, CardGroup, Container, CardColumns } from "react-bootstrap";
import axios from 'axios';
// import logo from '/Users/olya/Documents/Projects/parti_app/Parti-App/client/src/stockPhotos/anniversary/';

import logo1 from '../../stockPhotos/anniversary/anniversary1.png'

import styles from './card.module.css'; 

function SelectTheme(props) {

    // const array = ["1", "2", "3", "4", "5"];

    // const images = array.map(num => {
    //        return <Card.Img  variant="top" key={num} src={`./stockPhotos/anniversary/anniversary${num}.png`}  />
         
    // });

    const occasion = props.location.state.occasion.toLowerCase()
    const [selectedTheme, setTheme] = useState('')
 
    const handleClick = async (e) =>{
        setTheme(e.target.src)
        const userId = JSON.parse(localStorage.getItem('user'))
        const cardId = props.location.state.cardId
        console.log(userId)
        axios.put(`/card/${cardId}`, {
                theme: selectedTheme,
                })
            .then((response)=>{
              console.log('line 34 response data' , response.data)
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
  

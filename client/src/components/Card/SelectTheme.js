import { Card, Button, Nav, Image, Col, Row, CardGroup, Container, CardColumns } from "react-bootstrap";
// import logo from '/Users/olya/Documents/Projects/parti_app/Parti-App/client/src/stockPhotos/anniversary/';

import logo1 from '../../stockPhotos/anniversary/anniversary1.png'

import styles from './card.module.css'; 

function SelectTheme(props) {

    const occasion = props.location.state.occasion.toLowerCase()
    // const array = ["1", "2", "3", "4", "5"];

    // const images = array.map(num => {
    //        return <Card.Img  variant="top" key={num} src={`./stockPhotos/anniversary/anniversary${num}.png`}  />
         
    // });

    return (

        <CardGroup>
            <Card>
                <Card.Img variant="top" src={`./stockPhotos/${occasion}/${occasion}1.png`} width="362" height="158" />
            </Card>
            <Card>
                <Card.Img variant="top" src={`./stockPhotos/${occasion}/${occasion}2.png`} width="362" height="158"/>
            </Card>
            <Card>
                <Card.Img variant="top" src={`./stockPhotos/${occasion}/${occasion}3.png`} width="362" height="158" />
            </Card>
            <Card>
                <Card.Img variant="top" src={`./stockPhotos/${occasion}/${occasion}4.png`} width="362" height="158" />
            </Card>
            <Card>
                <Card.Img variant="top" src={`./stockPhotos/${occasion}/${occasion}5.png`} width="362" height="158"/>
            </Card>
        </CardGroup>
    );
  }
  
  export default SelectTheme;
  

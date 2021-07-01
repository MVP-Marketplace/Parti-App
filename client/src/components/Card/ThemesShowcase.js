import React, { useState } from 'react';
import { Card, CardGroup, Container, Image, Button , Tab, Tabs} from "react-bootstrap";
import axios from 'axios';


function ThemesShowcase(props) {
    const [key, setKey] = useState('home');
    const [selectedTheme, setTheme] = useState('')
    const cardId = JSON.parse(localStorage.getItem('cardId')) 

    console.log(cardId)
    const handleClick = async (e) =>{

        await setTheme(e.target.src)
        const cardId = props.state
        axios.put(`/card/${cardId}`, {
                theme: e.target.src,
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
      <Tabs
        id="controlled-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-5"
      >
        <Tab eventKey="home" title="Anniversary">
        <CardGroup>
       
       <Card>
           <Image
           variant="bottom"
           src={`./stockPhotos/anniversary/anniversary1.png`} 
           width = "362"
           height = "158"
           onClick={handleClick} />
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/anniversary/anniversary2.png`} 
           width = "362"
           height = "158"
           onClick={handleClick}/>
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/anniversary/anniversary3.png`} 
           width = "362"
           height = "158"
           onClick={handleClick} />
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/anniversary/anniversary4.png`} 
           width = "362"
           height = "158"
           onClick={handleClick} />
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/anniversary/anniversary5.png`} 
           width = "362"
           height = "158"
           onClick={handleClick}
           />
       </Card>
   </CardGroup>
        </Tab>
        <Tab eventKey="birthday" title="Birthday">
        <CardGroup>
       <Card>
           <Image
           variant="bottom"
           src={`./stockPhotos/birthday/birthday1.png`} 
           width = "362"
           height = "158"
           onClick={handleClick} />
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/birthday/birthday2.png`} 
           width = "362"
           height = "158"
           onClick={handleClick}/>
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/birthday/birthday3.png`} 
           width = "362"
           height = "158"
           onClick={handleClick} />
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/birthday/birthday4.png`} 
           width = "362"
           height = "158"
           onClick={handleClick} />
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/birthday/birthday5.png`} 
           width = "362"
           height = "158"
           onClick={handleClick}
           />
        </Card>
        </CardGroup>
        </Tab>
        <Tab eventKey="graduation" title="Graduation" >
        <CardGroup>
       <Card>
           <Image
           variant="bottom"
           src={`./stockPhotos/graduation/graduation1.png`} 
           width = "362"
           height = "158"
           onClick={handleClick} />
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/graduation/graduation2.png`} 
           width = "362"
           height = "158"
           onClick={handleClick}/>
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/graduation/graduation3.png`} 
           width = "362"
           height = "158"
           onClick={handleClick} />
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/graduation/graduation4.png`} 
           width = "362"
           height = "158"
           onClick={handleClick} />
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/graduation/graduation5.png`} 
           width = "362"
           height = "158"
           onClick={handleClick}
           />
        </Card>
        </CardGroup>
        </Tab>

        <Tab eventKey="promotion" title="Promotion" >
        <CardGroup>
       <Card>
           <Image
           variant="bottom"
           src={`./stockPhotos/promotion/promotion1.png`} 
           width = "362"
           height = "158"
           onClick={handleClick} />
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/promotion/promotion2.png`} 
           width = "362"
           height = "158"
           onClick={handleClick}/>
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/promotion/promotion3.png`} 
           width = "362"
           height = "158"
           onClick={handleClick} />
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/promotion/promotion4.png`} 
           width = "362"
           height = "158"
           onClick={handleClick} />
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/promotion/promotion5.png`} 
           width = "362"
           height = "158"
           onClick={handleClick}
           />
        </Card>
        </CardGroup>
        </Tab>
        <Tab eventKey="wedding" title="Wedding" >
        <CardGroup>
       <Card>
           <Image
           variant="bottom"
           src={`./stockPhotos/wedding/wedding1.png`} 
           width = "362"
           height = "158"
           onClick={handleClick} />
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/wedding/wedding2.png`} 
           width = "362"
           height = "158"
           onClick={handleClick}/>
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/wedding/wedding3.png`} 
           width = "362"
           height = "158"
           onClick={handleClick} />
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/wedding/wedding4.png`} 
           width = "362"
           height = "158"
           onClick={handleClick} />
       </Card>
       <Card>
           <Card.Img 
           variant="top" 
           src={`./stockPhotos/wedding/wedding5.png`} 
           width = "362"
           height = "158"
           onClick={handleClick}
           />
        </Card>
        </CardGroup>
        </Tab>
      </Tabs>
      <Button>  Continue </Button>
      </Container> 
    );
  }
  
  export default ThemesShowcase;
  

import { useState } from 'react'
import { Nav, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { Card } from "react-bootstrap";
import UploadVideo from "../Contributor/UploadVideo";

function LSide() {
  const [highlight, setHighlight] = useState('1');

  const options = [
    { name: 'Invitees', value: '1'},
    { name: 'Themes', value: '2'},
    { name: 'Media', value: '3'},
    { name: 'Music', value: '4'},
  ]

  return(
    <div>
      <Nav className='sidebar col-md-12 d-none d-md-block bg-light' style={{paddingTop: "150px"}}>
        <ButtonGroup className='mb-2'>
          {options.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type='radio'
              variant='secondary'
              name="radio"
              value={radio.value}
              checked={highlight === radio.value}
              onChange={(e) => setHighlight(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
      </ButtonGroup>
      <Card className="justify-content-md-center m-5 bg-light" border="0">
      <Card.Title className="text-center" style={{ fontSize: 30 }}>
        Upload a video or image to get started
      </Card.Title> 
      <Card.Body className="text-center" >
        <Card.Subtitle>
          3 minute max video length
        </Card.Subtitle>
        <Card.Subtitle className="text-center m-3 bg-light">
          <UploadVideo />
        </Card.Subtitle>
      </Card.Body>
    </Card>
      </Nav>
    </div>
  )
}

export default LSide
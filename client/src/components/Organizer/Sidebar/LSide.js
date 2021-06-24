import { useState } from 'react'
import { Nav, ButtonGroup, ToggleButton } from 'react-bootstrap'

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
      <h1>Left side placeholder</h1>
      <Nav className='sidebar col-md-12 d-none d-md-block bg-light'>
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
      </Nav>
    </div>
  )
}

export default LSide
import { useState } from 'react'
import { GrStatusPlaceholderSmall } from 'react-icons/gr'
import Contributors from '../Options/Contributors'
import Background from '../Options/Background'


export default function SideSelect() {

  const [bg, setBg] = useState('contrib')

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    position: 'static',
    width: '117px',
    height: '152.75px',
    left: '0px',
    top: '152.75px',
    border: 'none',
    backgroundColor: 'white'
  }

  const containerBg = {
    backgroundColor: '#d7b0ff'
  }

  const icontStyle = {
    position: 'static',
    left: '37px',
    right: '37px',
    top: '41.37px',
    bottom: '68.37px',
    }

    const pStyle = {
      display: 'flex',
      justifyContent: 'center',
      width: '82px',
      height: '19px',
      left: '17.5px',
      top: '92.38px',
      fontFamily: 'Nunito',
      fontStyle: 'normal',
      fontSize: '14px',
      lineHeight: '19px',
      color: '#262523',
    }

  return(
    <div>
      <button style={containerStyle}>
        <GrStatusPlaceholderSmall style={icontStyle} size={50} />
        <p style={pStyle} >Contributors</p>
      </button>
      <button style={containerStyle}>
        <GrStatusPlaceholderSmall style={icontStyle} size={50} />
        <p style={pStyle} >Background</p>
      </button>
      <button style={containerStyle}>
        <GrStatusPlaceholderSmall style={icontStyle} size={50} />
        <p style={pStyle} >Media</p>
      </button>
      <button style={containerStyle}>
        <GrStatusPlaceholderSmall style={icontStyle} size={50} />
        <p style={pStyle} >Music</p>
      </button>
    </div>
  )
}
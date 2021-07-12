import { FiVideo } from 'react-icons/fi'
import { RiArrowGoForwardFill, RiArrowGoBackFill } from 'react-icons/ri'


const mainDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px'
}

const btnStyles = {
  color: 'gray'
}

const prevBoxStyle = {
  width: '40vw',
  height: '40vw',
  margin: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'lightGrey'
}

const uploadBtnStyle ={
  width: '40vw',
  height: '2em',
  backgroundColor: 'white',
  fontSize: '1.2em',
  color: '#b0b0b0',
  borderRadius: '2px',
  border: '1px solid',
  boxShadow: '0 4px #f0f0f0'
}

function Preview() {
  return(
    <div style={mainDivStyle}>
      <div>
        <a href="#">
          <RiArrowGoBackFill 
            size={30}
            style={btnStyles}
          />
        </a>
        <a href="#">
          <RiArrowGoForwardFill 
            size={30}
            style={btnStyles}
          />
        </a>
      </div>
      <div style={prevBoxStyle}>
        <h3>Previews here</h3>
      </div>
      <button style={uploadBtnStyle}>
        <strong> Upload New Video </strong>
        <FiVideo size={30}/>
      </button>
    </div>
  )
}

export default Preview;
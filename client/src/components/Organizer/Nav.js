import { Navbar, Row } from 'react-bootstrap'

const navStyle={
  backgroundColor: '#d7b0ff',
  height: '80px'
}

function Nav() {
  return(
    <Navbar style={navStyle}>
      <div style={{
        width: '50%'
      }}>
        <h3>Logo</h3>
      </div>
      <Row style={{
        width: '50%',
        justifyContent: 'space-between'
      }}>
        <h4>invited</h4>
        <h4>unsent</h4>
        <button>Schedule delivery</button>
        <button>Invite</button>
        <button>Preview</button>
      </Row>
    </Navbar>
  )
}

export default Nav;
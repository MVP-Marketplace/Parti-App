import { Container, Col, Row } from 'react-bootstrap'
import Nav from './Nav'
import Contributors from './Options/Contributors'
import SideSelect from './Sidebar/SideSelect'


function Default() {
  return(
    <div>
      <Nav />
      <Container>
        {/* <SideSelect /> */}
        <Contributors />
      </Container>
    </div>
  )
}

export default Default;
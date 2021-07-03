import { Container, Col, Row } from 'react-bootstrap'
import Nav from './Nav'
import Preview from './Preview'
import LSide from '../Sidebar/LSide'


function Default() {
  return(
    <div>
      <Nav />
      <Container>
        <Row>
          <Col>
            <LSide />
          </Col>
          <Col>
            <Preview />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Default;
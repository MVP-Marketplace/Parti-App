import { Container, Col, Row } from 'react-bootstrap'
import Nav from './Nav'
import Preview from './Preview'


function Default() {
  return(
    <div>
      <Nav />
      <Container>
        <Row>
          <Col>
            <h1>Left side placeholder</h1>
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
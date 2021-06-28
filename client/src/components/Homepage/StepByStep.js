import {
  Container,
  Col,
  Row,
  Card,
  CardDeck,
  ListGroup,
} from "react-bootstrap";

// import "./index.css";

function StepByStep() {
  return (
    <Container>
      <Col>
        <Row>
          <ListGroup horizontal>
            <ListGroup.Item>
              <h2>1</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>2</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>3</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>4</h2>
            </ListGroup.Item>
          </ListGroup>
        </Row>
        <br />
        <Row>
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/228x247.png"
              />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  viverra placerat purus, a efficitur nibh rutrum vel.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/229x247.png"
              />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  viverra placerat purus, a efficitur nibh rutrum vel.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/214x247.png"
              />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  viverra placerat purus, a efficitur nibh rutrum vel.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/215x247.png"
              />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  viverra placerat purus, a efficitur nibh rutrum vel.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>
      </Col>
    </Container>
  );
}

export default StepByStep;

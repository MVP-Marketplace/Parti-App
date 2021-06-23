import { Container } from "react-bootstrap";
import Nav from "./Nav";
import Header from "./Header";
import Send from "./Send";
import DraftJS from "../DraftJS";

function Default() {
  return (
    <div>
      <Container>
        <Nav />
        <Header />
        <Container fluid>
          <DraftJS />
        </Container>
        <Send />
      </Container>
    </div>
  );
}

export default Default;

import { Container } from "react-bootstrap";
import Nav from "./Nav";
import Header from "./Header";
// import Send from "./Send";
import EmailJS from "./EmailJS";

function Default() {
  return (
    <div>
      <Container>
        <Nav />
        <Header />
        <Container fluid className="email">
          <EmailJS />
        </Container>
      </Container>
    </div>
  );
}

export default Default;

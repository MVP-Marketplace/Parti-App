import { Navbar, Row } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";

const navStyle = {
  backgroundColor: "#ffffff",
  height: "80px",
};

function Nav() {
  return (
    <Navbar style={navStyle}>
      <div
        style={{
          width: "40%",
        }}
      ></div>
      <Row
        style={{
          width: "60%",
          justifyContent: "space-between",
        }}
      >
        <h3
          style={{
            font: "Roboto",
            weight: "500",
            size: "48px",
            lineHeight: "56.25px",
            width: "359p",
            height: "74px",
            left: "474px",
            top: "22px",
          }}
        >
          Parti App
        </h3>
        <div>
          <BiUserCircle
            style={{
              width: "43px",
              height: "43px",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </div>
      </Row>
    </Navbar>
  );
}

export default Nav;

//import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ background: "#56ccf2" }}>
      <div
        style={{
          textAlign: "center",
          color: "white",
          width: "50%",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        The Generics
      </div>
      <div>
        <a href="youtube.com">
          <img src="../Images/youtube.jpg" style={{ width: "40px" }} alt="" />
        </a>

        <a href="spotify.com">
          <img src="../Images/Spotify.png" style={{ width: "40px" }} alt="" />
        </a>

        <a href="fb.com">
          <img
            src="../Images/Facebook Logo.png"
            style={{ width: "40px" }}
            alt=""
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import MainNav from "./components/MainNav";
import { Outlet } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Footer from './components/Footer';
import { useState } from "react";

const Root = (props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide=()=> setShow(false);

  return (
    <>
      <MainNav navshow={show} onnavShow={handleShow} onnavHide={handleHide}/>
      <Outlet/>
      <Button variant="outline-secondary" style={{ marginLeft: "725px" }} onClick={handleShow}>See the Cart</Button>
      <Footer />
    </>
  );
};

export default Root;

import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function PopupMessage(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    props.enable(false);
    setShow(false);
  }


  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>Unable to find rate for {props.from}/{props.to} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PopupMessage;
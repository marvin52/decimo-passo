import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tudo certo!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Você acabou de se logar no Décimo Passo Online!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;

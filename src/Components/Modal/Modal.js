import React,{useState} from 'react';
import {Modal,Button,Card}from 'react-bootstrap';


const ModalC=({drink})=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Detail
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{drink.strDrink}</Modal.Title>
        </Modal.Header>

        
        <Modal.Body>
                <div className="coktaillist">
            <Card style={{ width: '18rem' }}>
       <Card.Body>                 
  <Card.Img variant="top" src={drink.strDrinkThumb} />
    <Card.Text>
     {drink.strCategory}
    </Card.Text>
  </Card.Body>
</Card>    </div>
         <p><h4> Instruction : </h4>{drink.strInstructions}</p>
        </Modal.Body>
        
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalC
import React from 'react';
import { Card} from 'react-bootstrap';
import ModalC from '../Modal/Modal';
import './Coktail.css' ;

const Coktail = ({drink}) => {
    return (
        <div className="coktaillist">
            <Card style={{ width: '18rem' }}>
       <Card.Body>          
   <Card.Title>{drink.strDrink}</Card.Title>         
  <Card.Img variant="top" src={drink.strDrinkThumb} />

    <Card.Text>
     {drink.strCategory}
    </Card.Text>
 
    <Card.Link   href="#"><ModalC drink={drink}/></Card.Link>
  </Card.Body>
</Card>
            
        </div>
    )
}

export default Coktail

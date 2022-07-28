import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../styles/Menu.css";

function Menu() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
   
   
 <Carousel activeIndex={index} onSelect={handleSelect}>
 <Carousel.Item>
   <img
     className="d-block w-100"
     //src="https://cdn.pixabay.com/photo/2021/07/01/23/42/wallpaper-6380532_1280.jpg"
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEXEpIQRYj2SAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="          
     alt="First slide"
   />

   <CardGroup>
   <Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="" />
 <Card.Body>
   <Card.Title>Espresso</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the
     bulk of the card's content.
   </Card.Text>
   <Button variant="primary">Place an order</Button>
 </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="." />
 <Card.Body>
   <Card.Title>Brewed Coffee</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the
     bulk of the card's content.
   </Card.Text>
   <Button variant="primary">Place an order</Button>
 </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180" />
 <Card.Body>
   <Card.Title>Cappuccino</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the
     bulk of the card's content.
   </Card.Text>
   <Button variant="primary">Place an order</Button>
 </Card.Body>
</Card>
</CardGroup>

   <Carousel.Caption>
     <h3>Coffee Type 1 (Hot)</h3>
     
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="d-block w-100"
     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEXEpIQRYj2SAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
     alt="Second slide"
   />


<CardGroup>
   <Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180" />
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the
     bulk of the card's content.
   </Card.Text>
   <Button variant="primary">Place an order</Button>
 </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180" />
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the
     bulk of the card's content.
   </Card.Text>
   <Button variant="primary">Place an order</Button>
 </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180" />
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the
     bulk of the card's content.
   </Card.Text>
   <Button variant="primary">Place an order</Button>
 </Card.Body>
</Card>
</CardGroup>

   <Carousel.Caption>
     <h3>Coffee Type 2 (Cold)</h3>
     
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="d-block w-100"
     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEXEpIQRYj2SAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
     alt="Third slide"
   />

<CardGroup>
   <Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180" />
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the
     bulk of the card's content.
   </Card.Text>
   <Button variant="primary">Place an order</Button>
 </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180" />
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the
     bulk of the card's content.
   </Card.Text>
   <Button variant="primary">Place an order</Button>
 </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180" />
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the
     bulk of the card's content.
   </Card.Text>
   <Button variant="primary">Place an order</Button>
 </Card.Body>
</Card>
</CardGroup>

   <Carousel.Caption>
     <h3>Hot Tea</h3>
     
   </Carousel.Caption>
 </Carousel.Item>


 <Carousel.Item>
   <img
     className="d-block w-100"
     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEXEpIQRYj2SAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
     alt="Third slide"
   />

<CardGroup>
   <Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180" />
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the
     bulk of the card's content.
   </Card.Text>
   <Button variant="primary">Place an order</Button>
 </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180" />
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the
     bulk of the card's content.
   </Card.Text>
   <Button variant="primary">Place an order</Button>
 </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180" />
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the
     bulk of the card's content.
   </Card.Text>
   <Button variant="primary">Place an order</Button>
 </Card.Body>
</Card>
</CardGroup>

   <Carousel.Caption>
     <h3>Ice Tea</h3>
     
   </Carousel.Caption>
 </Carousel.Item>

</Carousel>
   

    
  );
}

export default Menu;
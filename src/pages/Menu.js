import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from './Modal/index';
import CardGroup from "react-bootstrap/CardGroup";
import CoffeeMapping from "../mappings/coffee-mappings";
import "../styles/Menu.css";
import { Container } from "react-bootstrap";

const coffee_mappings = CoffeeMapping;

function Menu() {
  const [index, setIndex] = useState(0);
  const [coffeeState, setCoffeeState] = useState({});
  const [modalShow, setModalShow] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleClick = (value) => {
    setModalShow(true);
    setCoffeeState(value);
  }

  console.log(coffeeState, 'stats');

  return (
    <Container style={{ marginBottom: "40px", marginTop: "40px" }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {(coffee_mappings || []).map((item_arr) => {
          return (
              <Carousel.Item>
                <CardGroup
                  style={{ display: "flex", justifyContent: "space-around " }}
                >
                  {(item_arr?.coffee || []).map((item) => {
                    return (
                      <Card style={{ width: "10rem", height:'32rem' }}>
                          <Card.Img
                            variant="top"
                            style={{height:'300px', maxHeight: "250px",width:'auto' }}
                            src={item?.image}
                          />
                          <Card.Body>
                            <Card.Title>{item?.label}</Card.Title>
                            <Card.Text>
                              {item?.description}
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleClick(item)}>Place an order</Button>
                          </Card.Body>
                      </Card>
                    )
                  })}
                </CardGroup>
              </Carousel.Item>
          )
        })}
      </Carousel>
      <Modal 
        show={modalShow}
        onHide={() => setModalShow(false)}
        coffee_data={coffeeState}
      />
    </Container>
  );
}

export default Menu;

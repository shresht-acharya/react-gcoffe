import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap';
import FormForModal from './Form';

const ModalForm = (props) => {
    console.log(props);
    const { coffee_data } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Here's your order!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ display: 'flex' }}>
            <div>
                <br/>
                <h4 style={{fontStyle:'italic'}}>{coffee_data?.label}</h4>
                <br/>
                <Image 
                    variant="top"
                    style={{ maxHeight: "300px" }}
                    src={coffee_data?.image} 
                />
            </div>
            <FormForModal price={coffee_data?.price}  />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Buy Now</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForm;
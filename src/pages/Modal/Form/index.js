import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './form.css';

const FormForModal = ({ price }) => {
  return (
    <Form style={{ width: '100%' }}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Label>Home address</Form.Label>
        <Form.Control type="address" placeholder="Enter address" />
        <Form.Label>Pincode</Form.Label>
        <Form.Control type="pincode" placeholder="Pincode" />
        <h4 style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 15 }}>₹{price}</h4>
    </Form>
  );
}

export default FormForModal;
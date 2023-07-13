import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardf({myEmp}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/Images/Facepooja.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            {myEmp.id}
            {myEmp.name}
            {myEmp.email}
            {myEmp.department}
       
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardf;
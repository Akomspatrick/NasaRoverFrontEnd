import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
interface Result {
    destination: string;
    
}
export const NewToast = (props: Result) => {
   
    const [showA, setShowA] = useState(true);
  
  
    const toggleShowA = () => setShowA(!showA);
    return (<>
            <Row>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowA} className="mb-2">
          Toggle Result  Panel
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">FInal Result</strong>
           
          </Toast.Header>
                    <Toast.Body>{props. destination}</Toast.Body>
        </Toast>
      </Col>

    </Row>
    </>)
}
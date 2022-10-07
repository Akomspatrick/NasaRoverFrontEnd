import { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'

import { NewToast } from './NewToast';

export const NasaComponent = () => {
    const baseURL = "https://localhost:7012/api/Nasa";
    const api = axios.create({baseURL:`https://localhost:7012/api/Nasa`})
    const [extreEdgeOfPlateau, seTextreEdgeOfPlateau] = useState<string>('5 5')
    const [takeoffPoint, setTakeoffPoint] = useState<string>('1 2 N')
    const [pathToTake, setPathToTake] = useState<string>('LMLMLMLMM')
    const [destination ,setDestination] = useState<string>('')
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const PacketDto = { extreEdgeOfPlateau, takeoffPoint, pathToTake }
        SubmitObj(PacketDto)
    }
    const SubmitObj = async (PacketDto:any) => {
        
      try {
        let response = await axios.post(baseURL, PacketDto)
        setDestination(response.data)
      } catch (err) {
        console.log(err)
      }

      
    }
    return (<>
        

        <Card style={{ width: '18rem' }}>
       <Card.Body>
        <Card.Title> Nasa Rover </Card.Title>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="extreEdgeOfPlateau">
                        <Form.Control value={extreEdgeOfPlateau}
                            required
                            type="text"
                            placeholder="Edge of Plateau"
                            maxLength={3}
                            minLength={3}
                            onChange={(e) => { seTextreEdgeOfPlateau(e.target.value) }}
                        />
      </Form.Group>

                    
      <Form.Group className="mb-3" controlId="takeoffPoint">
                        <Form.Control type="text"
                            onChange={(e) => { setTakeoffPoint(e.target.value) }}
                            value={takeoffPoint}
                            required
                            placeholder="Take of Point"
                            maxLength={5}
                            minLength={5} />
     </Form.Group>
                    

     <Form.Group className="mb-3" controlId="pathToTake">
                        <Form.Control value={pathToTake}
                            onChange={(e) => { setPathToTake(e.target.value) }}
                            required
                            type="text"
                            placeholder="Path of Rover"
                            minLength={1} />
     </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
       
      </Card.Body>
      </Card>
      
      { destination &&<NewToast destination={destination}></NewToast>}
    </>);
}
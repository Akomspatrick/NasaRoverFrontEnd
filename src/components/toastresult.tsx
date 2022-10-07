import { Toast } from "react-bootstrap"

interface Result {
    destination: string;
    
}
export const ToastResult = ( props:Result )=>
{
    return (<>
        <Toast>
       <Toast.Header>
         <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
         <strong className="me-auto">Rover Position</strong>
        
       </Toast.Header>
            <Toast.Body>{ props.destination}</Toast.Body>
     </Toast>
     </>)

}   
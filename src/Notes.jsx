import { Card, Button } from "react-bootstrap"


export default function NewNote(props) {

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle>{props.date}</Card.Subtitle>
                    <Card.Text>{props.description}</Card.Text>
                    <Button variant='danger'>Excluir</Button>
                </Card.Body>
            </Card>
            <br />
        
        
        </>
    )
}
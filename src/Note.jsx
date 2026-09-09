import { Container, Button, Modal, InputGroup, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import NewNote from './Notes.jsx'
import api from './api.js'

export default function Note() {
    const [show, setShow] = useState(false);
    const [notesList, setNotesList] = useState([]);
    function SaveNote(){

        var note = {
            date: document.getElementById("inputDate").value,
            title: document.getElementById("inputTitle").value,
            description: document.getElementById("inputDescription").value
        }

        setNotesList([...notesList, note])
        setShow(false)

        async function GetAll() {
            var res = await api.get('/notes')
            setNotesList(res.data)
        }

    }

    useEffect(() => {
        GetAll()
    }, [0])

    return (
        <>
            <Container className="p-5 my-4 bg-light rounded-3">
                <h1>Anotações</h1>
                <p>Use essa aba para fazer anotações importantes para não se esquecer!</p>
                <Button variant="success" onClick={() => setShow(true)}>
                    Criar anotação
                </Button>
            </Container>

            <Container fluid>
                {notesList.map((item) => <NewNote key={item.title} title={item.title} date={item.date} description={item.description} />)}
            </Container>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nova Anotação</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">Data</InputGroup.Text>
                        <Form.Control type="date" id="inputDate" />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">Titulo</InputGroup.Text>
                        <Form.Control id="inputTitle" />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">Texto</InputGroup.Text>
                        <Form.Control id="inputDescription" as="textarea" />
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={() => setShow(false)}>
                        Cancelar
                    </Button>
                    <Button variant='success' onClick={() => { SaveNote(); }}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Image, Navbar, Nav } from 'react-bootstrap'
import { useState } from 'react'
import Note from './Note.jsx'
import Work from './Work.jsx'
import Tare from './Tarefa.jsx'

export default function About() {
    const [currentPage, setCurrentPage] = useState(1);

    const renderContent = () => {
        switch (currentPage) {
            case 1:
                return (
                    <>
                        <Container fluid className="banner">
                            <Row className="justify-content-center">
                                <h1 className="white-text">Leonardo</h1>
                            </Row>
                            <Row className="justify-content-center">
                                <Image id="profile-image" roundedCircle src="images.jpg" />
                            </Row>
                        </Container>
                        <Container fluid className="about-me">
                            <Row>
                                <h2>Sobre mim</h2>
                                <p>
                                    Olá, eu sou o Leonardo! <br /> 
                                    Tenho experiência em desenvolvimento web e gosto muito de criar coisas novas com código. <br /> 
                                    Em meu tempo livre, gosto de passar tempo com minha família e amigos, além de ler alguns livros.
                                </p>
                            </Row>
                        </Container>
                    </>
                );
            case 2:
                return <Work />;
            case 3:
                return <Tare />;
            case 4:
                return <Note />;
            default:
                return null;
        }
    };

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Tarefas</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#sobre" onClick={() => setCurrentPage(1)}>Sobre</Nav.Link>
                    <Nav.Link href="#trabalhos" onClick={() => setCurrentPage(2)}>Trabalhos</Nav.Link>
                    <Nav.Link href="#tarefas" onClick={() => setCurrentPage(3)}>Tarefas</Nav.Link>
                    <Nav.Link href="#Note" onClick={() => setCurrentPage(4)}>Anotações</Nav.Link>
                </Nav>
            </Navbar>
            {renderContent()}
        </>
    );
}
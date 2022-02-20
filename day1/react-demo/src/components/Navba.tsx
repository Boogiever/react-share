import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useContext} from "react";
import {ThemeContext} from "../App.tsx";

export const Navba= function(){

    const theme = useContext(ThemeContext);

    const themStyle = {
        backgroundColor: theme === "dark" ? "#000" : "#ccc",
        color: theme === "dark" ? "#fff" : "#000"
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <p style={themStyle}>this is an example</p>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

};

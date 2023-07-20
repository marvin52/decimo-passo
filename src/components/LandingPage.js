import React from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Décimo Passo Online</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <h1>Bem-vindo ao Décimo Passo Online</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite seu email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite sua senha" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LandingPage;
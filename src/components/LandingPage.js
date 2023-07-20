import React, { useState } from 'react';
import axios from 'axios';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    description: '',
    role: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulando a URL da API
    const apiUrl = 'http://localhost:80/addUser';

    // Realizando a requisição POST usando axios
    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log('Requisição POST enviada com sucesso!', response);
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao enviar a requisição POST.', error);
      });
  };

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
        <div>
      <h1>Cadastre-se!</h1>
        <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>Role:</label>
              <select name="role" value={formData.role} onChange={handleInputChange}>
                <option value="">Selecione</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="helper">Helper</option>
              </select>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
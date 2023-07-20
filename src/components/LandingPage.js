import React, { useState } from 'react';
import axios from 'axios';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    username:'',
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
    const apiUrl = 'https://api.decimo-passo.online/addUser';

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
        <div className="form-login">
          <h1>Cadastre-se!</h1>
          <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
              <label for="name" name="name" className="form-label">Seu Nome Completo</label>
              <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control"
                      />
                  </div>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input name="username" value={formData.username} onChange={handleInputChange} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div class="mb-3">
                <label for="email" name="email" className="form-label">Seu Endereço de Email</label>
                <input value={formData.email} onChange={handleInputChange} type="email" className="form-control" id="email" name="email" placeholder="name@example.com"/>
              </div>
              <div class="mb-3">
                <label for="description" name="description" class="form-label">Um breve resumo sobre você</label>
                <textarea value={formData.description} onChange={handleInputChange} class="form-control" id="description" name="description" rows="3"></textarea>
              </div>

              <label for="password" name="password" className="form-label">Sua Senha:</label>
              <div className='input-group mp-3'>
                  <input
                    className='form-control'
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
              </div>

              <div>
                <label>Seu papel na comunidade:</label>
                <div className="form-group mp-3">
                  <select className="form-control" name="role" value={formData.role} onChange={handleInputChange}>
                    <option value="">Selecione</option>
                    <option value="admin">Admin</option>
                    <option value="user">Usuário</option>
                    <option value="helper">Terapêuta</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-success">Enviar</button>
            </form>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
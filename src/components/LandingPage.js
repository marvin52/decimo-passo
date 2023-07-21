import React, { useState } from 'react';
import axios from 'axios';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    username:'',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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

  
  const handleSubmitLogin = (event) => {
    event.preventDefault();

    // Simulando a URL da API
    const apiUrl = 'https://api.decimo-passo.online/login';

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
          <Navbar.Brand href="#"><i class="fa-solid fa-pen-to-square"></i>  Décimo Passo Online</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#">Entrar</Nav.Link>
            <Nav.Link href="#">Inscreva-se</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='row container-fluid container-forms'>
        <div className='col-sm'>
          <h1 className='dp_title'>Bem-vindo ao Décimo Passo Online</h1>
        </div>
        <div className='col-sm'>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <i class="fa-solid fa-right-to-bracket login-icon"></i> Entre!
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
              <form onSubmit={handleSubmitLogin}>
              <div className="mb-3">
                <label for="email" name="email" className="form-label">Seu Endereço de Email</label>
                <input required value={formData.email} onChange={handleInputChange} type="email" className="form-control" id="email" name="email" placeholder="name@example.com"/>
              </div>
              <div className='row'>
                <div className='col-sm'>
                   <label for="password" name="password" className="form-label">Sua Senha:</label>
                    <div className='input-group mp-3'>
                     <input
                        required
                        className='form-control'
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        />
                    </div>
                  </div>
                  </div>
                  <button type="submit" className="btn btn-success btn-signup"> <i class="fa-solid fa-right-to-bracket login-icon"></i> Entrar!</button>
                </form>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <i class="fa-solid fa-user-plus login-icon"></i> Ou cadastre-se!
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="form-login">
                <form onSubmit={handleSubmit}>
                    
                    <div className="mb-3">
                      <label for="email" name="email" className="form-label">Seu Endereço de Email</label>
                      <input required value={formData.email} onChange={handleInputChange} type="email" className="form-control" id="email" name="email" placeholder="name@example.com"/>
                    </div>
                    <div className='row'>
                      <div className='col-sm'>
                      <label for="password" name="password" className="form-label">Sua Senha:</label>
                        <div className='input-group mp-3'>
                            <input
                              required
                              className='form-control'
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={handleInputChange}
                            />
                        </div>
                      </div> 
                      <div className='col-sm'>
                      <label for="password" name="confirmPassword" className="form-label">Confirme sua Senha:</label>
                        <div className='input-group mp-3'>
                            <input
                              required
                              className='form-control'
                              type="password"
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                            />
                        </div>
                      </div> 
                    </div>
                    <div className='row'>
                      <div className="input-group mb-3 col-sm">
                      <label for="name" name="name" className="form-label">Seu Nome Completo</label>
                      <div className="input-group">
                            <input
                              required
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="form-control"
                              />
                          </div>
                      </div>
                      <div className="input-group col-sm username-group">
                      <label for="username" name="username" className="form-label label-username">Seu Username</label>
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input required name="username" value={formData.username} onChange={handleInputChange} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <label for="description" name="description" className="form-label">Um breve resumo sobre você</label>
                        <textarea required value={formData.description} onChange={handleInputChange} className="form-control" id="description" name="description" rows="3"></textarea>
                      </div>
                      <div className='col-sm'>
                        <label>Seu papel na comunidade:</label><br/>
                        <div className="form-group mp-3">
                          <select required className="form-control select-role" name="role" value={formData.role} onChange={handleInputChange}>
                            <option value="">Selecione</option>
                            <option value="user">Usuário</option>
                            <option value="helper">Terapêuta</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-success btn-signup"><i class="fa-solid fa-user-plus"></i> Cadastrar!</button>
                  </form>
              </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default LandingPage;
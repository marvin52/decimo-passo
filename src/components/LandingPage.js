import React, { useState } from 'react';
import axios from 'axios';
import { Navbar, Container, Nav, Modal, Button } from 'react-bootstrap';

const ModalLoginMessage = () => {
  const [show, setShow] = useState(false);

  window.handleCloseLogin = () => setShow(false);
  window.handleShowLogin = () => setShow(true);

  const [customMessageL, setCustomMessageL] = useState('');


  // Função para definir a mensagem personalizada
  window.handleCustomMessageL = (a) => {
    setCustomMessageL(a);
    window.handleShowLogin(); // Abre o modal após definir a mensagem
  };
  

  return (
    <>
      <Modal show={show} onHide={window.handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Autenticação de Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {customMessageL}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={window.handleCloseLogin}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const ModalSignUpMessage = () => {
  
  const [show, setShow] = useState(false);
  window.handleCloseSignUp = () => setShow(false);
  window.handleShowSignUp = () => setShow(true);

  const [customMessage, setCustomMessage] = useState('');


  // Função para definir a mensagem personalizada
  window.handleCustomMessage = (a) => {
    setCustomMessage(a);
    window.handleShowSignUp(); // Abre o modal após definir a mensagem
  };

  
  return (
    <>
      <Modal show={show} onHide={window.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro de Novo Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p id="signUpMessage">
            {customMessage}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={window.handleCloseSignUp}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
function setCookie(name, value, daysToExpire) {
  const date = new Date();
  date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}


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

  function validateUserData(userData) {
    // Verifica se o password e o confirmPassword são iguais
    if (userData.password !== userData.confirmPassword) {
      return { isValid: false, message: 'As senhas não coincidem.' };
    }
  
    // Verifica se o email está no formato correto
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userData.email)) {
      return { isValid: false, message: 'O email não está em formato válido.' };
    }
  
    // Verifica se o role é "user" ou "helper"
    if (userData.role !== 'user' && userData.role !== 'helper') {
      return { isValid: false, message: 'O role deve ser "user" ou "helper".' };
    }
  
    // Verifica se o username segue os padrões para nome de usuário
    const usernamePattern = /^[a-zA-Z0-9_-]+$/;
    if (!usernamePattern.test(userData.username)) {
      return { isValid: false, message: 'O nome de usuário deve conter apenas letras, números, "-" ou "_", sem espaços ou caracteres especiais.' };
    }
  
    // Verifica se o campo description não está em branco
    if (!userData.description.trim()) {
      return { isValid: false, message: 'A descrição não pode estar em branco.' };
    }
  
    // Verifica se o campo name não está em branco
    if (!userData.name.trim()) {
      return { isValid: false, message: 'O nome não pode estar em branco.' };
    }
  
    // Se todas as validações passarem, retorna como válido
    return { isValid: true };
  }


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulando a URL da API
    const apiUrl = 'https://api.decimo-passo.online/addUser';

    // Realizando a requisição POST usando axios
  let checkData = validateUserData(formData);
  
  if(checkData.isValid){
    axios
      .post(apiUrl, formData)
      .then((response) => {
        if(response.isValid){
          window.handleCustomMessage("Usuário Cadastrado com Sucesso!");
        } else {
          window.handleCustomMessage(response.data.message);
          setCookie("authToken", response.data.loginKey, 30);
          setCookie("username", response.data.user.username, 30);
        }
        console.log('Requisição POST enviada com sucesso!', response);
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao enviar a requisição POST.', error);
      })
    } else {
      window.handleCustomMessage(checkData.message);
    }
  };

  
  const handleSubmitLogin = (event) => {
    event.preventDefault();

    // Simulando a URL da API
    const apiUrl = 'https://api.decimo-passo.online/login';

    // Realizando a requisição POST usando axios
    axios
      .post(apiUrl, formData)
      .then((response) => {
        //check some things yet
        console.log('Requisição POST enviada com sucesso!', response);
        if(response.status == 200){
          setCookie("authToken", response.data.loginKey, 30);
          setCookie("username", response.data.user.username, 30);
          window.handleCustomMessageL('Você acabou de se logar no Décimo Passo Online!');
        } else {
          window.handleCustomMessageL('Algo deu errado! Verifique se o email e a senha estão corretos.');
        }
      })
      .catch((error) => {
        window.handleCustomMessageL(error.response.data.error);
        // console.error('Ocorreu um erro ao enviar a requisição POST.', error);
      });
  };


  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#"><i class="fa-solid fa-pen-to-square"></i>  Décimo Passo Online</Navbar.Brand>
          <Nav className="ml-auto">
            {/* <Nav.Link href="#">Entrar</Nav.Link>
            <Nav.Link href="#">Inscreva-se</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      <div className='row container-fluid container-forms'>
        <div className='col-sm'>
          <h1 className='dp_title'>Bem-vindo ao Décimo Passo Online</h1>
        </div>
        <div className='col-sm form-login-signup'>
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
                <label for="email-login" name="email" className="form-label">Seu Endereço de Email</label>
                <input required value={formData.email} onChange={handleInputChange} type="email" className="form-control" id="email-login" name="email" placeholder="name@example.com"/>
              </div>
              <div className='row'>
                <div className='col-sm'>
                   <label for="password" name="password" className="form-label">Sua Senha:</label>
                    <div className='input-group mp-3'>
                     <input
                        placeholder='Digite sua senha aqui'
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
                              placeholder='Digite sua senha aqui'
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
                              placeholder='Repita a sua senha aqui'
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
                              placeholder='Diga seu nome aqui'
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
                        <input required name="username" value={formData.username} onChange={handleInputChange} type="text" className="form-control" placeholder="Nome de usuario" aria-label="Username" aria-describedby="basic-addon1"/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <label for="description" name="description" className="form-label">Um breve resumo sobre você</label>
                        <textarea placeholder='Descreva um pouco sobre você e sobre a sua busca aqui na comunidade!' required value={formData.description} onChange={handleInputChange} className="form-control" id="description" name="description" rows="3"></textarea>
                      </div>
                      <div className='col-sm'>
                        <label>Seu papel na comunidade:</label><br/>
                        <div className="form-group mp-3">
                          <select required className="form-control select-role" name="role" value={formData.role} onChange={handleInputChange}>
                            <option value="" disabled selected>Selecione</option>
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
      <ModalLoginMessage></ModalLoginMessage>
      <ModalSignUpMessage></ModalSignUpMessage>
    </div>
  );
};

export default LandingPage;
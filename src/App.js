import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para fazer a verificação de autenticação no backend
    const checkLoginStatus = async () => {
      try {
          // Faz o POST para a rota do backend para verificar o login
          const response = await axios.post('https://api.decimo-passo.online/check-login');

          // Define o estado isLoggedIn com base na resposta do servidor
          setIsLoggedIn(response.data.loggedIn);

          // Marca o loading como false, indicando que a verificação foi concluída
          setLoading(false);
        } catch (error) {
          console.error('Erro ao verificar status de login:', error);

          // Em caso de erro, define o loading como false para permitir a renderização do componente de erro
          setLoading(false);
        }
      };

      checkLoginStatus();
    }, []);


  return (
    <html lang="pt-br">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Décimo Passo Online</title>
        <description>Faça o seu décimo passo online e receba retorno de profissionais na área!</description>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>
      <body>
        {isLoggedIn ? <Home /> : <LandingPage />}
      </body>
    </html>
  );
}

export default App;
import React from 'react';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

function App() {
  return (
    <html lang="pt-br">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Décimo Passo Online</title>
        <description>Faça o seu décimo passo online e receba retorno de profissionais na área!</description>
      </head>
      <body>
        <LandingPage />
      </body>
    </html>
  );
}

export default App;
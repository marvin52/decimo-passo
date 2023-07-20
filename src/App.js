import React from 'react';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <html>
      <head>
        <script src="bower_components/firebaseui/dist/firebaseui.js"></script>
        <link type="text/css" rel="stylesheet" href="bower_components/firebaseui/dist/firebaseui.css" />
        <script src="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth__pt_br.js"></script>
        <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.css" />
      </head>
      <body>
        <LandingPage />
      </body>
    </html>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import UserTable from './tables/UserTable';
import { useState } from 'react';

function App() {

  const usersData = [
    { id: 1, name: 'Pepillo', username: 'pepillo' },
    { id: 2, name: 'Ana', username: 'ana123' },
    { id: 3, name: 'Luis', username: 'luisito' },
    { id: 4, name: 'María', username: 'mari_lopez' },
    { id: 5, name: 'Carlos', username: 'carlitos' },
    { id: 6, name: 'Jorge', username: 'jorge_garcia' },
    { id: 7, name: 'Sofía', username: 'sofia.m' },
    { id: 8, name: 'Fernando', username: 'fer_nando' },
    { id: 9, name: 'Claudia', username: 'claudia.r' },
    { id: 10, name: 'Pablo', username: 'pablito' },
    { id: 11, name: 'Lucía', username: 'lucia_123' },
    { id: 12, name: 'Diego', username: 'diego_d' },
    { id: 13, name: 'Isabel', username: 'isabelita' },
    { id: 14, name: 'Gabriel', username: 'gabi' },
    { id: 15, name: 'Mariana', username: 'mari_n' },
    { id: 16, name: 'Victor', username: 'vic_vic' },
    { id: 17, name: 'Juliana', username: 'juli' },
    { id: 18, name: 'Andrés', username: 'andres_a' },
    { id: 19, name: 'Cristina', username: 'cris' },
    { id: 20, name: 'Emilio', username: 'emi' },
    { id: 21, name: 'Valentina', username: 'valen' },
    { id: 22, name: 'Rafael', username: 'rafa' },
    { id: 23, name: 'Carmen', username: 'carmen_s' },
    { id: 24, name: 'Adrián', username: 'adri' },
    { id: 25, name: 'Sara', username: 'sara.h' },
    { id: 26, name: 'Felipe', username: 'felipe.f' },
    { id: 27, name: 'Estefanía', username: 'estefi' },
    { id: 28, name: 'Eduardo', username: 'edu' },
    { id: 29, name: 'Natalia', username: 'nat' },
    { id: 30, name: 'Julián', username: 'julián' },

  ];

  const initialformstate = { id: null, name: '', username: '' };

  const [users, setUsers] = useState(usersData);

  const [CurrentUser, setCurrentUser] = useState(initialformstate);

  return (
    <div className="App">
      <h1>CRUD DE USUARIOS</h1>
      <UserTable
      users={users}
      />
    </div>
  );
}

export default App;


import './App.css';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Main from './Main';

function App() {
  return (
      <Routes>
      <Route path='/' element={<Login />} ></Route>   
      <Route path='/main' element={<Main/>} ></Route>
      </Routes>
        

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import User from './components/User';


function App() {
  return (
    
    <div>
      <BrowserRouter>
      
      <Routes>

        <Route path='/' element={<User/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/updates/:id' element={<UpdateUser/>}></Route>
      </Routes>


      </BrowserRouter>
    </div>

  );
}

export default App;

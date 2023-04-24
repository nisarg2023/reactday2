
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddPost from './pages/AddPost/AddPost';
import { AddUserForm } from './pages/AddUserForm/AddUserForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddUserForm/>} />
        <Route path='/addPost' element={<AddPost/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

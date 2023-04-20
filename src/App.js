
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AddUserForm } from './pages/AddUserForm/AddUserForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddUserForm/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Register from './Component/Register';
import Login from './Component/Login';
import Footer from './Component/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path='/home' element={<Main/>}  />
        <Route path='/register' element={<Register/>}  />
        <Route path='/login' element={<Login/>}  />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
import Login from './pages/Login';
import { UserProvider } from './components/UserContext';
import New from './pages/New';

function App() {
  return (
    <UserProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<New />} />

    
        </Routes>
      </Router>
    </div>
    </UserProvider>
  );
}

export default App;

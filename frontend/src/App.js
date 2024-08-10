import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
import Login from './pages/Login';
import { UserProvider } from './components/UserContext';

import StudentProfile from './pages/StudentProfile';
import UpdateStudentProfile from './pages/UpdateStudentProfile';
import ViewCourses from './pages/ViewCourses';
import MyCourses from './pages/MyCourses';

function App() {
  return (
    <UserProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/update-student-profile" element={<UpdateStudentProfile />} />
          <Route path="/view-courses" element={<ViewCourses />} />
          <Route path="/my-courses" element={<MyCourses />} />


        </Routes>
      </Router>
    </div>
    </UserProvider>
  );
}

export default App;

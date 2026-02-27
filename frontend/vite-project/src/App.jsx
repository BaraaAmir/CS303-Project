import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'; 
import HomePage from './pages/HomePage'; 
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
    return (
        <>
            {}
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/register' element={<Signup />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

export default App;
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import toast from "react-hot-toast";


const App = () => {
    return (<div data-theme="forest">
            <button onClick={() => toast.success("congrats")} className="btn btn-primary"> Click me</button>
            <button className="btn btn-primary">One</button>
            <button className="btn btn-secondary">Two</button>
            <button className="btn btn-accent btn-outline">Three</button>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/admin" element={<DashBoard/>}/>

            </Routes>


        </div>
    );
};

export default App;
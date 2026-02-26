// import {Route, Routes} from "react-router-dom";
// import Login from "./pages/Login.jsx";
// import Signup from "./pages/Signup.jsx";
// import DashBoard from "./pages/DashBoard.jsx";
// // import toast from "react-hot-toast";
//
//
// const App = () => {
//     return (<div data-theme="forest">
//             {/*<button onClick={() => toast.success("congrats")} className="btn btn-primary"> Click me</button>*/}
//             {/*<button className="btn btn-primary">Register</button>*/}
//             {/*<button className="btn btn-secondary">Two</button>*/}
//             {/*<button className="btn btn-accent btn-outline">Three</button>*/}
//             <Routes>
//                 <Route path="/" element={<Login/>}/>
//                 <Route path="/register" element={<Signup/>}/>
//                 <Route path="/admin" element={<DashBoard/>}/>
//             </Routes>
//
//
//         </div>
//     );
// };
//
// export default App;








// import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './pages/Signup.jsx'
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login.jsx";


function App() {
    // const [count, setCount] = useState(0)

    return (
        <div>
            {/*<BrowserRouter>*/}
                <Routes>
                    <Route path='/register' element={<Signup/>}/><Route/>
                    <Route path='/login' element={<Login/>}/><Route/>
                </Routes>
            {/*</BrowserRouter>*/}
        </div>
    )
}

export default App
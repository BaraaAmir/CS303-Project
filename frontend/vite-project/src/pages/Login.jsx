// import {Link} from "react-router-dom";
// import { useState } from 'react';
//
//
// const Login = () => {
//     return (
//
//         <form className="flex flex-col gap-4">
//             {/* Email Field */}
//             <div>
//                 <label className="block text-sm font-medium">Email Address</label>
//                 <input
//                     type="email"
//                     placeholder="name@example.com"
//                     className="w-full p-2 border rounded-md"
//                     required
//                 />
//             </div>
//
//             {/* Password Field */}
//             <div>
//                 <label className="block text-sm font-medium">Password</label>
//                 <input
//                     type="password"
//                     placeholder="••••••••"
//                     className="w-full p-2 border rounded-md"
//                     required
//                 />
//             </div>
//
//             <div className="min-h-screen">
//                 <h1>Login</h1>
//                 <Link
//                     to="/register"
//                     className="bg-blue-500 text-white px-4 py-2 rounded">
//                     register
//                 </Link>
//             </div>
//
//
//
//         </form>
//
//
//
//     );
// };

// export default Login;


// import { useState } from 'react';
//
// const Login = () => {
//     // 1. Create pieces of state to hold the user's input
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//
//     // 2. This function runs when the form is submitted
//     const handleSubmit = (e) => {
//         e.preventDefault(); // Prevents the page from refreshing (standard HTML behavior)
//
//         console.log("Attempting to login with:");
//         console.log("Email:", email);
//         console.log("Password:", password);
//
//         // This is where you would eventually call an API
//         alert(`Logging in as ${email}`);
//     };
//
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             {/* The Form Container */}
//             <form
//                 onSubmit={handleSubmit}
//                 className="bg-white p-8 rounded-lg shadow-md w-96"
//             >
//                 <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//
//                 {/* Email Input Group */}
//                 <div className="mb-4">
//                     <label className="block text-gray-700 mb-2">Email Address</label>
//                     <input
//                         type="email"
//                         value={email} // This links the input to our 'email' state
//                         onChange={(e) => setEmail(e.target.value)} // Updates state as you type
//                         className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="Enter your email"
//                         required
//                     />
//                 </div>
//
//                 {/* Password Input Group */}
//                 <div className="mb-6">
//                     <label className="block text-gray-700 mb-2">Password</label>
//                     <input
//                         type="password"
//                         value={password} // Links input to 'password' state
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="Enter password"
//                         required
//                     />
//                 </div>
//
//                 {/* Submit Button */}
//                 <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
//                 >
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// };
//
// export default Login;


import React, {useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

function Login() {

    const [name , setName] = useState('');
    // const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('' , {name ,password})
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }








    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className="p-4">
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Login</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name / Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                            // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/*<div className="mb-3">*/}
                    {/*    <label htmlFor="email">*/}
                    {/*        <strong>Email</strong>*/}
                    {/*    </label>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        placeholder="Enter Name"*/}
                    {/*        autoComplete="off"*/}
                    {/*        name="email"*/}
                    {/*        className="form-control rounded-0"*/}
                    {/*        onChange={(e) => setEmail(e.target.value)}*/}
                    {/*    />*/}
                    {/*</div>*/}



                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            palceholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                </form>

                <p>Create Account</p>
                <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Register
                </Link>
            </div>
        </div>
    );
};

export default Login;
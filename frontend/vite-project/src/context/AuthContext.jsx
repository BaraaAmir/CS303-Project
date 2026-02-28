import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext=createContext()

export const AuthProvider =({children})=>{
    const [user, setUser] = useState(null);  
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const token=localStorage.getItem("token")
        if(token){
            setUser({token})
        }
        setLoading(false)
    },[])

    const login =(token)=>{
        localStorage.setItem("token",token)
        setUser({token})
    }

        const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    const signup=async({username,email,password})=>{
        try{
            const res=await axios.post('http://localhost:5000/api/auth/register' , {username, email, password })
            login(res.data.token)
            return{ success:true}
        }catch(err){
        console.log(err.response?.data || err.message);
        return { success: false, msg: err.response?.data?.msg || "Signup failed" };
        }
    }
        return (
        <AuthContext.Provider value={{ user, login, logout, loading,signup }}>
        {children}
        </AuthContext.Provider>
    );
}
import { useState } from "react";
import apiService from "../../services/api.service";
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email,
            password
        }

        await apiService.login(user)
        setEmail('')
        setPassword('')
        navigate('/')

    }

    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={ handleSubmit }>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
                <button type="submit">Send</button>
            </form>
        </>
    )
}

export default Login
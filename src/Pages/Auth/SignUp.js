import { useState } from "react";
import apiService from "../../services/api.service";

const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            name,
            email,
            password
        }

        await apiService.signUp(user)
        setName('')
        setEmail('')
        setPassword('')
        alert('Successfull sign up!')

    }

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={ handleSubmit }>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={name} 
                    onChange={ e => setName(e.target.value) }
                />
            </div>
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

export default SignUp
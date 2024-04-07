import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useUserContext } from '../Components/UserProvider';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  const { user, setUser } = useUserContext()

  function handleChange(event) {
    let name = event.target.name;

    let formCopy = { ...form };
    formCopy[name] = event.target.value

    setForm(formCopy)
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(form)
    const result = await axios.post('https://fundacion-backend.vercel.app/api/user/login', form);
    console.log(result.status)
    setUser(result.data)
    localStorage.setItem('user', JSON.stringify(result.data))
    navigate('/')
  }



  return (
    <div className="content-below-navbar">
      <h1 className="page-title">Log In</h1>

      <form className='form' onSubmit={handleSubmit}>
        <input className='input' placeholder='Your email' type='email' name='email' onChange={handleChange} value={form.email} />
        <input className='input' placeholder='Your password' type='password' name='password' onChange={handleChange} value={form.password} />
        <button className='form-button'>Log In</button>
        {/* Botón adicional "Go to Dapp" */}
        <a href="https://pepocasver.github.io/IEBS_Refutoken_Dapp/" target="_blank" rel="noopener noreferrer" className='dapp-button'>Go to Dapp</a>
        <Link to="/register">Not registered? Click here</Link>
      </form>
    </div>

  )
}

export default Login

import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  function handleChange(event) {
    let name = event.target.name;

    let formCopy = { ...form };
    formCopy[name] = event.target.value

    setForm(formCopy)
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(form)
    const result = await axios.post('https://fundacion-backend.vercel.app/api/user', form);
    alert('Thank you for registering, please log in now')
    navigate('/login')
  }



  return (
    <div className="content-below-navbar">
      <h1 className="page-title">Register</h1>

      <form className='form' onSubmit={handleSubmit}>
        <input className='input' placeholder='Your email' type='email' name='email' onChange={handleChange} value={form.email} />
        <input className='input' placeholder='Your password' type='password' name='password' onChange={handleChange} value={form.password} />
        <button className='form-button'>Register</button>
        <Link to="/login">Already registered? Click here</Link>
      </form>
    </div>

  )
}

export default Register

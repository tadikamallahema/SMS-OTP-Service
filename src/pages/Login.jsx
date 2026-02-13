import React from 'react'
import NavBar from './NavBar'

const Login = () => {
    const [form ,setForm] = React.useState({
        pnum:'',
        email:'',
        pwd:''
        })

    const handleChange = (e) =>{
       
      setForm({
        ...form,
        [e.target.name]:[e.target.value]
      })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(form);
    }
  return (
    <div>
        <NavBar/>
      <h1> I am in Login Page </h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Enter your phoneNumber</label>
            <input type='text'name='pnum' value={form.pnum} minLength={10} onChange={handleChange} required />
        </div>
        <div>
            <label>Enter your Email</label>
            <input type='text' name='email' value={form.email} onChange={handleChange} required />
        </div>
        <div>
            <label>Enter your Password</label>
            <input type='password' name='pwd' value={form.pwd} maxLength={10} onChange={handleChange} required />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login

import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  })

  const onSubmit = e => {
    e.preventDefault()
    if(password !== password2){
      console.log('Passwords do not match')
    } else {
      console.log(formData)
    }
  }

  const { name, email, password, password2} = formData
  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form onSubmit={ e => onSubmit(e)} className='form'>
        <div className='form-group'>
          <input type='text' placeholder='First and last name' name='name' value={name} onChange={e => onChange(e)} required />
        </div>
        <div className='form-group'>
          <input type='email' placeholder='Email Address' name='email' value={email} onChange={e => onChange(e)} required />
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Password' name='password' value={password} onChange={e => onChange(e)} minLength='6' />
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Confirm Password' name='password2' value={password2} onChange={e => onChange(e)} minLength='6' />
        </div>
        <input type='submit' value='Register' className='btn btn-primary' />
        <p className='my-1'>
          Already have an account?
          <Link to={'/login'}> Sign In</Link>
        </p>
      </form>
    </Fragment>
  );
};

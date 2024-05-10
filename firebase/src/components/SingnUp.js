import React, { useState } from 'react'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import {app} from '../firebase'

const auth=getAuth(app)
const SingnUp = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

const createUser=()=>{
    createUserWithEmailAndPassword(auth,email,password).then
    ((value)=>alert('Success'))
}
  return (
    <div className='sign-up'>
        <h1>Sign Up page</h1>
        <label>Enter UserName</label>
        <input type='text' placeholder='Enter user name'
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        />
        <label>Enter Password</label>
        <input type='password' placeholder='Enter your password'
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        />
      <button onClick={createUser}>Singup</button>
    </div>
  )
}

export default SingnUp

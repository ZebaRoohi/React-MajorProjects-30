import React, { useState } from 'react'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import {app} from '../firebase'

const auth=getAuth(app)
const SignIn = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

const SignInUser=()=>{
    signInWithEmailAndPassword(auth,email,password).then
    ((value)=>console.log('Singn Success'))
    .catch((err)=>console.log(err))
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
      <button onClick={SignInUser}>Singup</button>
    </div>
  )
}

export default SignIn

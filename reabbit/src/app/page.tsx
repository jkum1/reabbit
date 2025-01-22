'use client';
import Link from 'next/link';
import './app.css';
import { redirect } from 'next/navigation';

export default function Home() {
  const valid = true;

  function navigate() {
    if (valid) {
      redirect('/options_menu')
    } else {
      redirect('/');
    }
  }

  return (
    <div id="SignInPage">
      <div id='LoginHeader'>Login</div>
      <input id='auto_layout2' placeholder='Username'></input>
      <input id='auto_layout2' placeholder='Passoword'></input>
      <div id='checkboxesSection'>
        <label className='auto_layout1'>
          <input type='checkbox'/>
          <span className='checkmark'/>
          Remember me
        </label>
        <label className='auto_layout1'>
          <input type='checkbox'/>
          <span className='checkmark'/>
          Forgot Password?
        </label>
      </div>
      <button className='bttn' onClick={navigate}>Login</button>
      <div id='signupSection'>
        <div id='dntHaveAcc'>Dont have an account?</div>
        <div id='signUp'>Sign Up</div>
      </div>
    </div>
  );
}

'use client';
import Link from 'next/link';
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
    <div>
        <div>LOGIN</div>
        <div>Username Input</div>
        <input type="text" placeholder="Username"/>
        <div>Password</div>
        <input type="text" placeholder="Password"/>
        <div>Login</div>
        <button onClick={navigate}>Login</button>
    </div>

  );
}

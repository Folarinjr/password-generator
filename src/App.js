import './App.css';
import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [password, setPassword] = useState('*******');

  //Generate random number then change it to string, toString(36) this method includes alphabeth 
  const randomPasskey = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

  //Set Password
  const handlePassword = () => {
    setPassword(randomPasskey);
    toast('Password Generated')
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(randomPasskey);
      toast('Copied')
    } catch (error) {
      toast('Not Copied')
    }
  }

  return (
    <div className="container">
      <h1 className='header'>Generate a password</h1>
      <div className="content">
        <h2 className='password'>{password}</h2>
        <button className='btn' onClick={handlePassword}>Generate Password</button>
        <button className="btn btn-primary" onClick={copy}>Copy</button>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default App;

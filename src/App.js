import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    grant_type=authorization_code&
    code=AUTH_CODE_HERE&
    redirect_uri=http://localhost:3000/&
    client_id=IPULzYeSf2DIC6bIBU3XJHNSDTBl6n0YM1oieeW8&
    client_secret=yAm40nQSZl6mDikR8BpSShn7ci3sCcXKINg4C4Ham14NN8UoCOj7cts9Qr9THQSpG8UpnLahHbalc4gSAQvN8OBcMYl3BQC1CLoHBk7YPbzPj03wplIMh5EG9cFoQYAv
Dn1Ai9SOoLKCTTKXWqsAqb7PsKGOVnifVwzFi9h3
vfQAE2kYwk6ZCGTKcYy5Id2WmdKrmkqMMQdRjrGE4IjTxKCi8auWCY1mc0QQC891TVt7UwcjfBeE9D3Yd3FcesEyVKpzASRPnkaUHHgI23GKUrLa1uYCBrEGpASgCLxA
    curl -X POST -d "grant_type=client_credentials" "client_id=IPULzYeSf2DIC6bIBU3XJHNSDTBl6n0YM1oieeW8&client_secret=yAm40nQSZl6mDikR8BpSShn7ci3sCcXKINg4C4Ham14NN8UoCOj7cts9Qr9THQSpG8UpnLahHbalc4gSAQvN8OBcMYl3BQC1CLoHBk7YPbzPj03wplIMh5EG9cFoQYAv" https://ai.enertiv.com/o/token/
    curl -X POST -d "client_id=IPULzYeSf2DIC6bIBU3XJHNSDTBl6n0YM1oieeW8&client_secret=yAm40nQSZl6mDikR8BpSShn7ci3sCcXKINg4C4Ham14NN8UoCOj7cts9Qr9THQSpG8UpnLahHbalc4gSAQvN8OBcMYl3BQC1CLoHBk7YPbzPj03wplIMh5EG9cFoQYAv&grant_type=client_credentials" https://ai.enertiv.com/o/token/

    fetch('https://ai.enertiv.com/o/token/grant_type=client_credentials&client_id=IPULzYeSf2DIC6bIBU3XJHNSDTBl6n0YM1oieeW8&client_secret=yAm40nQSZl6mDikR8BpSShn7ci3sCcXKINg4C4Ham14NN8UoCOj7cts9Qr9THQSpG8UpnLahHbalc4gSAQvN8OBcMYl3BQC1CLoHBk7YPbzPj03wplIMh5EG9cFoQYAv',{
      method: "POST",
      headers:
      {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

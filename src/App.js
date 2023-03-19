import logo from './logo.svg';
import './App.css';
import {
  UserCreateForm 
 } from './ui-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <UserCreateForm />
    </div>
  );
}

export default App;

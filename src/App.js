import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <br />
      <form>
        <label>Username:</label>
        <input type="text" name="username" placeholder='Enter username'/> 
        <br />
        <br />
        <label>Password:</label>
        <input type="password" name="password" placeholder='Enter password'/>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

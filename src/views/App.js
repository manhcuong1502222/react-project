import logo from './logo.svg';
import './App.scss'

import Nav from './Nav/Nav';
import AddComponent from './Example/AddComponent';
import ChildComponent from './Example/ChildComponent';
import MyComponent from './Example/MyComponent';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MyComponent />


      </header>
    </div>
  );
}

export default App;

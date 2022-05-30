import './App.css';
import logo from './assets/img/logo.png';

function App() {
  return (
    <>
      <header className='header'>
        <img className='logo' src={logo} alt='logo'></img>
      </header>
      <section className="viewer">
        <div className="background"></div>
      </section>
    </>
  );
}

export default App;

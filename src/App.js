import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services';

function App() {
  
  return (
    <>

    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/services' Component={Services}/>
    </Routes>
    </>
  );
}

export default App;

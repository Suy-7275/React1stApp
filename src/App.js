import logo from './logo.svg';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './webcomponent/Header/Header';
import Footer from './webcomponent/Footer/Footer';
import Home from './webcomponent/HomePage/Home';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    
    <div className='app'>

    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/learn' element={<h1>Learn Page</h1>}/>
      <Route path='/reference' element={<h1>Reference Page</h1>}/>
      <Route path='/react' element={<h1>React Page</h1>}/>
      <Route path='/reactdom' element={<h1>React-Dom Page</h1>}/>
      <Route path='/community' element={<h1>Community Page</h1>}/>
      <Route path='/stackoverflow' element={<h1>Stackoverflow Page</h1>}/>
      <Route path='/news' element={<h1>News Page</h1>}/>
      <Route path='/blog' element={<h1>Blog Page</h1>}/>
      <Route path='/github' element={<h1>Github Page</h1>}/>
      <Route path='/register' element={<h1>Register Page</h1>}/>
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
 
  );
}

export default App;
     
    

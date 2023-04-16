
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom';
import Education from './components/Education';
import Certificate from './components/Certificate';
function App() {
  return (
    <>
      <div className='main'>
        <Navbar />
        <div className='body'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/project' element={<Projects/>}></Route>
            <Route path='/education' element={<Education/>}/>
            <Route path='/certificate' element={<Certificate/>}/>
          </Routes>

        </div>
      </div>

    </>
  );
}

export default App;

// App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter';

// pages
import About from './pages/About';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Design from './pages/Design';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='mt-0'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/design' element={<Design />} />
          </Routes>
        </main>
        <Footer />
        <BottomFooter />
      </BrowserRouter>
    </>
  );
}

export default App;

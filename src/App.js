import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// components
import Footer from './components/Footer';
import Header from './components/Header';

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
        <div className='main mt-1'>
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/design' element={<Design />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

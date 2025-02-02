import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';
import Footer from './components/footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Home from './views/home/Home.jsx';
import MyAccount from './views/MyAccount/MyAccount'
import LoginRegisterContainer from './views/LoginRegisterContainer/LoginRegisterContainer';
import AddProduct from './components/AddProduct/AddProduct';
import MyCart from './components/MyCart/MyCart';
function App() {

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/ganbare-store-g27-front' element={<Home />} />
            <Route path='/ganbare-store-g27-front/loginRegister' element={<LoginRegisterContainer />} />
            <Route path='/ganbare-store-g27-front/miCuenta' element={<MyAccount />} />
            <Route path='/ganbare-store-g27-front/miCarro' element={<MyCart />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AuthProvider>
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Header from './assets/components/Header/Header'
import Footer from './assets/components/Footer/Footer'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './assets/components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <>
      <Header />
      <main className="App">
        <Routes>
          <Route className="dummyTitle" path="/" element={<h1>Home</h1>} />
          <Route className="dummyTitle" path="/products" element={<ItemListContainer/>} />
          <Route className="dummyTitle" path="/about" element={<h1>Nosotros</h1>} />
          <Route className="dummyTitle" path="/contact" element={<h1>Contacto</h1>} />
          <Route className="dummyTitle" path="/product/:id" element={<ItemDetailContainer/>} />
          <Route className="dummyTitle" path="/cart" element={<h1>Carrito</h1>} />
          <Route className="dummyTitle" path="/login" element={<h1>Login</h1>} />
          <Route path="*" element=
          {<div className="error-404-Container">
              <img src='https://http.cat/404' alt="404 Not Found" />
            </div>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart' 
import SearchBar from './components/SearchBar'
import productsData from './data/products.json'

function App() {
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }];
    })
  }

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    )
  }

  return (
    <Router>
      <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar setSearchTerm={setSearchTerm} />
                <ProductList products={productsData} addToCart={addToCart} searchTerm={searchTerm} />
              </>
            }
          />
          <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

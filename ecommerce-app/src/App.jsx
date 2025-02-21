import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import SearchBar from './components/SearchBar'
import productsData from './data/products.json'

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar setSearchTerm={setSearchTerm} />
                <ProductList products={productsData} searchTerm={searchTerm} />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetails setSearchTerm={setSearchTerm} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

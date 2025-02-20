import ProductCard from './ProductCard'

function ProductList({ products, addToCart, searchTerm }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="row">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  )
}

export default ProductList

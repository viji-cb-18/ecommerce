import ProductCard from './ProductCard'

function ProductList({ products, searchTerm }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  )

  return (
    <div className="row">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        <p className="text-center">No products found. Try searching for another product.</p>
      )}
    </div>
  )
}

export default ProductList

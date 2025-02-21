import { useParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import productsData from '../data/products.json'

function ProductDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const product = productsData.find((p) => p.id === parseInt(id))

  if (!product) {
    return <h2 className="text-center">Product Not Found</h2>
  }

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card product-detail-card p-4">
        <img src={product.image} className="img-fluid mb-3" alt={product.name} />
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">{product.description}</p>
        <h4 className="text-primary">${product.price}</h4>
        <button className="btn btn-primary w-100" onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
        <Link to="/" className="btn btn-secondary w-100 mt-3">Back to Home</Link>
      </div>
    </div>
  )
}

export default ProductDetails

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

function ProductCard({ product }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div className="card product-card" onClick={() => navigate(`/product/${product.id}`)} style={{ cursor: "pointer" }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <h6>${product.price}</h6>
        <button
          className="btn btn-primary w-100"
          onClick={(e) => {
            e.stopPropagation()
            dispatch(addToCart(product));
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard

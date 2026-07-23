import { useLocation, Link } from 'react-router-dom'

function PurchasePage() {
  const location = useLocation()
  const product = location.state

  if (!product) {
    return (
      <div className="purchase-page">
        <h2 className="h2">Purchase</h2>
        <p>No product selected.</p>
        <Link to="/hooks" className="btn">
          Back to Hooks
        </Link>
      </div>
    )
  }

  const total = product.price * product.quantity

  return (
    <div className="purchase-page">
      <h2 className="h2">Purchase Page</h2>
      <div className="products">
        <div className="container">
          <div className="card1">
            <img src={product.image} alt={product.name} />
            <div className="ProductCard">Order Confirmed</div>
            <div>{product.name}</div>
            <div>Price: {product.price}</div>
            <div>Quantity: {product.quantity}</div>
            <div>Total: {total}</div>
            <p>Already Bought</p>
            <Link to="/hooks" className="btn">
              Back to Hooks
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchasePage

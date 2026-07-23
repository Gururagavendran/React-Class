import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Hooks(props: any) {
  const navigate = useNavigate()
  const [purchase, setPurchase] = useState(false)
  const [inCart, setInCart] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const buyNow = () => {
    setPurchase(true)
    navigate('/purchase', {
      state: {
        name: props.name,
        price: props.price,
        image: props.image,
        quantity,
      },
    })
  }

  const toggleCart = () => {
    setInCart(!inCart)
  }

  const increaseQty = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    props.name && (
      <div className="container">
        <div className="card1">
          <img src={props.image} alt={props.name} />
          <div className="ProductCard">Product</div>
          <div>{props.name}</div>
          <div>{props.price}</div>

          <div className="qty-selector">
            <button className="btn qty-btn" onClick={decreaseQty}>
              -
            </button>
            <span className="qty-value">{quantity}</span>
            <button className="btn qty-btn" onClick={increaseQty}>
              +
            </button>
          </div>

          <button className="btn" onClick={buyNow}>
            Buy Now
          </button>
          <button className="btn" onClick={toggleCart}>
            {inCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>

          <p>{purchase ? 'Already Bought' : 'New'}</p>
          <p>{inCart ? `In Cart (${quantity})` : 'Not in Cart'}</p>
        </div>
      </div>
    )
  )
}

export default Hooks

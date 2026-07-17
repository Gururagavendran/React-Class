import watch from "../assets/watch.png"
import phone from "../assets/phone.png"

const prodList1 = [
  {
    name: "Watch",
    price: 1500,
    image: watch,
    "show": true,
  },

  {
    name: "Phone",
    price: 20000,
    image: phone,
    show: true,
  },
]

const list = prodList1.map((product) => (
  <div className="container" key={product.name}>
    <div className="card1">
      <img src={product.image} />
      <div className="ProductCard">Product</div>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <button className="btn">Buy now</button>
    </div>
  </div>
))

function DynamicListAlt() {
    return <div className="products">{list}</div>
  }
  
  export default DynamicListAlt
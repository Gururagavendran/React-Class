import watch from "../assets/watch.png"
import phone from "../assets/phone.png"
import Props from "./props"

const prodList = [
  {
    name: "Watch",
    price: 1500,
    image: watch,
    show: true,
  },
  {
    name: "Phone",
    price: 20000,
    image: phone,
    show: true,
  },
]

function DynamicList() {
  const list = prodList.map((product) => (
    <Props
      key={product.name}
      name={product.name}
      image={product.image}
      price={product.price}
      show={product.show}
    />
  ))

  return <div className="products">{list}</div>
}

export default DynamicList

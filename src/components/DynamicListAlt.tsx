import watch from "../assets/watch.png"
import phone from "../assets/phone.png"
import Props from "./ReactProps"

const prodList2 = [
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
  const list = prodList2.map((product) => (
    <Props
      key={product.name}
      name={product.name}
      image={product.image}
      price={product.price}
    />
  ))

  return <div className="products">{list}</div>
}

export default DynamicList

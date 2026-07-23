import { useState } from "react"
import watch from "../assets/watch.png"
import phone from "../assets/phone.png"
import Props from "./ReactProps"

const prodList = [
  {
    name: "Watch",
    category: "watch",
    price: 1500,
    image: watch,
  },
  {
    name: "Phone",
    category: "phone",
    price: 20000,
    image: phone,
  },
]

function Filter() {
  const [price, setPrice] = useState<number | "all">("all")
  const [category, setCategory] = useState<string>("all")

  const list = prodList
    .filter((product) => {
      const matchPrice = price === "all" || product.price === price
      const matchCategory = category === "all" || product.category === category
      return matchPrice && matchCategory
    })
    .map((product) => (
      <Props
        key={product.name}
        name={product.name}
        image={product.image}
        price={product.price}
      />
    ))

  return (
    <div>
      <div className="filter-controls">
        <div className="filter-group">
          <span>Price:</span>
          <button
            className={price === "all" ? "btn filter-active" : "btn"}
            onClick={() => setPrice("all")}
          >
            All
          </button>
          <button
            className={price === 1500 ? "btn filter-active" : "btn"}
            onClick={() => setPrice(1500)}
          >
            1500
          </button>
          <button
            className={price === 20000 ? "btn filter-active" : "btn"}
            onClick={() => setPrice(20000)}
          >
            20000
          </button>
        </div>

        <div className="filter-group">
          <span>Category:</span>
          <button
            className={category === "all" ? "btn filter-active" : "btn"}
            onClick={() => setCategory("all")}
          >
            All
          </button>
          <button
            className={category === "watch" ? "btn filter-active" : "btn"}
            onClick={() => setCategory("watch")}
          >
            Watch
          </button>
          <button
            className={category === "phone" ? "btn filter-active" : "btn"}
            onClick={() => setCategory("phone")}
          >
            Phone
          </button>
        </div>
      </div>

      <div className="products">{list}</div>
    </div>
  )
}

export default Filter

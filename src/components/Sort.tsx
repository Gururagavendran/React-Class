import { useState } from "react"
import watch from "../assets/watch.png"
import phone from "../assets/phone.png"
import Props from "./ReactProps"

const prodList = [
  {
    name: "Watch",
    price: 1500,
    image: watch,
  },
  {
    name: "Phone",
    price: 20000,
    image: phone,
  },
]

function Sort() {
  const [order, setOrder] = useState<"asc" | "desc">("asc")

  const list = [...prodList]
    .sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    )
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
          <span>Sort by price:</span>
          <button
            className={order === "asc" ? "btn filter-active" : "btn"}
            onClick={() => setOrder("asc")}
          >
            Ascending
          </button>
          <button
            className={order === "desc" ? "btn filter-active" : "btn"}
            onClick={() => setOrder("desc")}
          >
            Descending
          </button>
        </div>
      </div>

      <div className="products">{list}</div>
    </div>
  )
}

export default Sort

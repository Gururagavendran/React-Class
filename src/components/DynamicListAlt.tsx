import watch from "../assets/watch.png"
import phone from "../assets/phone.png"
import Props from "./ReactProps"

const prodList2 = [
  {
    name: "Watch",
    price: 1500,
    image: watch,
    show: true
  },
  {
    name: "Phone",
    price: 20000,
    image: phone,
    show: true
  }
]


/* If condition */
const list = prodList2.map((product) => {
  if (product.show) {
    return (
      <Props
        key={product.name}
        name={product.name}
        image={product.image}
        price={product.price}
        show={product.show}
      />
    );
  }

  return null;
});

/* Filter method
const list = prodList2
.filter(product => product.show)
.map((product) => (
      <Props
        key={product.name}
        name={product.name}
        image={product.image}
        price={product.price}
        show={product.show}
      />
));
*/

function DynamicListAlt() {
    
  return <div className="products">{list}</div>
}

export default DynamicListAlt

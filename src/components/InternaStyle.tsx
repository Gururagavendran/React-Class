import '../App.css'
import watch from '../assets/watch.png'
import phone from '../assets/phone.png'

const internalStyle = {
    backgroundColor: 'lightblue',
    color: 'black',
    padding: '10px',
    borderRadius: '5px',
};

function InternalStyle() {
  return (
    <>
      <div className="container">
        <div className="card1">
          <img src={watch} />
          <div className="ProductCard" style={internalStyle}>Product</div>
          <div>Watch</div>
          <div>1500</div>
          <button className="btn">Buy now</button>
        </div>
      </div>

      <div className="container">
        <div className="card1">
          <img src={phone} />
          <div className="ProductCard" style={internalStyle}>Product</div>
          <div>Phone</div>
          <div>20000</div>
          <button className="btn">Buy now</button>
        </div>
      </div>
    </>
  )
}

export default InternalStyle

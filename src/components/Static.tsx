import '../App.css'
import watch from '../assets/watch.png'
import phone from '../assets/phone.png'

function Static() {
  return (
    <>
      <div className="container">
        <div className="card1">
          <img src={watch} />
          <div className="externalCard">Product</div>
          <div>Watch</div>
          <div>1500</div>
          <button>Buy now</button>
        </div>
      </div>

      <div className="container">
        <div className="card1">
          <img src={phone} />
          <div className="externalCard">Product</div>
          <div>Phone</div>
          <div>20000</div>
          <button>Buy now</button>
        </div>
      </div>
    </>
  )
}

export default Static

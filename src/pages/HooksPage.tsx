import watch from '../assets/watch.png'
import phone from '../assets/phone.png'
import Hooks from '../components/Hooks'

function HooksPage() {
  return (
    <>
      <h2 className="h2">Hooks & Click Events</h2>
      <div className="products">
        <Hooks name="Watch" image={watch} price={1500} />
        <Hooks name="Phone" image={phone} price={20000} />
      </div>
    </>
  )
}

export default HooksPage

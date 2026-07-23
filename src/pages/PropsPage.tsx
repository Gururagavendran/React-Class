import watch from '../assets/watch.png'
import phone from '../assets/phone.png'
import Props from '../components/ReactProps'

function PropsPage() {
  return (
    <>
      <h2 className="h2">Props</h2>
      <div className="products">
        <Props name="Watch" image={watch} price={1500} />
        <Props name="Phone" image={phone} price={20000} />
      </div>
    </>
  )
}

export default PropsPage

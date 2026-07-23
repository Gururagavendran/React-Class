import watch from '../assets/watch.png'
import phone from '../assets/phone.png'
import ConditionalRender from '../components/Conditional'

function ConditionalPage() {
  return (
    <>
      <h2 className="h2">Conditional Rendering</h2>
      <div className="products">
        <ConditionalRender name="Watch" image={watch} price={1500} />
        <ConditionalRender name="Phone" image={phone} price={20000} show={true} />
      </div>
    </>
  )
}

export default ConditionalPage

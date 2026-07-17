import './App.css'
import watch from "./assets/watch.png"
import phone from "./assets/phone.png"
import Props from "./components/ReactProps"
import DynamicList from "./components/DynamicList"
import ConditionalRender from './components/Conditional'

function App() {
  return (
    <>
      <h2>Props</h2>
      <div className="products">
        <Props name="Watch" image={watch} price={1500} />
        <Props name="Phone" image={phone} price={20000} />
      </div>

       <h2>Conditional Rendering</h2>
      <div className="products">
        <ConditionalRender name="Watch" image={watch} price={1500} show={true}/>
        <ConditionalRender name="Phone" image={phone} price={20000} />
      </div>


      <h2>Dynamic Content Loading</h2>
      <DynamicList />
    </>
  )
}

export default App

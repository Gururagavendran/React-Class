import './App.css'
import watch from "./assets/watch.png"
import phone from "./assets/phone.png"
import Props from "./components/props"
import DynamicList from "./components/DynamicList"

function App() {
  return (
    <>
      <h2>Props</h2>
      <div className="products">
        <Props name="Watch" image={watch} price={1500} show={true} />
        <Props name="Phone" image={phone} price={20000} />
      </div>

      <h2>Dynamic Content Loading</h2>
      <DynamicList />
    </>
  )
}

export default App

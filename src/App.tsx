import './App.css'
import watch from "./assets/watch.png"
import phone from "./assets/phone.png"
import Props from "./components/ReactProps"
import DynamicList from "./components/DynamicList"
import DynamicListAlt from "./components/DynamicListAlt"
import ConditionalRender from './components/Conditional'
import Static from './components/Static'
import InternalStyle from './components/InternalStyle'

function App() {
  return (
    <>
    
    <h2>Regular</h2>
      <div className="products">
        <Static/>
      </div>

       <h2>Internal Style</h2>
      <div className="products">
        <InternalStyle/>
      </div>


      <h2>Props</h2>
      <div className="products">
        <Props name="Watch" image={watch} price={1500}  />
        <Props name="Phone" image={phone} price={20000}  />
      </div>

       <h2>Conditional Rendering</h2>
      <div className="products">
        <ConditionalRender name="Watch" image={watch} price={1500} />
        <ConditionalRender name="Phone" image={phone} price={20000} show={true}/>
      </div>


      <h2>Dynamic Content Loading</h2>
      <div className="products" />
      <DynamicList />

      <h2>Dynamic Content Loading Alternative</h2>
      <div className="products" />
      <DynamicListAlt />
    </>
  )
}

export default App


/*
key={index} - key value error in console
add every component as seperate navigation tabs in navbar/sidebar
sort function - ascending & descending
hook State in react
button functions - onclick, onhover
*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import StaticPage from './pages/StaticPage'
import InternalStylePage from './pages/InternalStylePage'
import PropsPage from './pages/PropsPage'
import ConditionalPage from './pages/ConditionalPage'
import DynamicPage from './pages/DynamicPage'
import DynamicAltPage from './pages/DynamicAltPage'
import FilterPage from './pages/FilterPage'
import SortPage from './pages/SortPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/static" element={<StaticPage />} />
          <Route path="/internal-style" element={<InternalStylePage />} />
          <Route path="/props" element={<PropsPage />} />
          <Route path="/conditional" element={<ConditionalPage />} />
          <Route path="/dynamic" element={<DynamicPage />} />
          <Route path="/dynamic-alt" element={<DynamicAltPage />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/sort" element={<SortPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App

/*
key={index} - key value error in console
hook State in react
button functions - onclick, onhover
*/

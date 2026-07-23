import { Link } from 'react-router-dom'

const pages = [
  { to: '/static', title: 'Regular', desc: 'Static content without props' },
  { to: '/internal-style', title: 'Internal Style', desc: 'Inline / internal CSS styles' },
  { to: '/props', title: 'Props', desc: 'Passing data with props' },
  { to: '/conditional', title: 'Conditional Rendering', desc: 'Show or hide based on a flag' },
  { to: '/dynamic', title: 'Dynamic List', desc: 'Load cards from a list with map' },
  { to: '/dynamic-alt', title: 'Dynamic List Alternative', desc: 'Alternative dynamic list approach' },
  { to: '/filter', title: 'Filter', desc: 'Filter products by price and category' },
  { to: '/sort', title: 'Sort', desc: 'Sort products by price ascending or descending' },
  { to: '/hooks', title: 'Hooks', desc: 'useState, click events, cart and purchase' },
]

function Home() {
  return (
    <div className="home">
      <h1 className="h2">React Class Demos</h1>
      <p className="home-intro">
        Use the cards to pick a topic below and open each example.
      </p>
      <div className="home-grid">
        {pages.map((page) => (
          <Link key={page.to} to={page.to} className="home-card">
            <h3>{page.title}</h3>
            <p>{page.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home

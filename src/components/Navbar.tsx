import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/static', label: 'Regular' },
  { to: '/internal-style', label: 'Internal Style' },
  { to: '/props', label: 'Props' },
  { to: '/conditional', label: 'Conditional' },
  { to: '/dynamic', label: 'Dynamic List' },
  { to: '/dynamic-alt', label: 'Dynamic Alt' },
  { to: '/filter', label: 'Filter' },
  { to: '/sort', label: 'Sort' },
  { to: '/hooks', label: 'Hooks' },
]

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">React Class</div>
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

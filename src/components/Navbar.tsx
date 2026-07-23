import { NavLink } from 'react-router-dom'

type NavbarProps = {
  onMenuClick: () => void
}

const links = [
  { to: '/', label: 'Home', end: true },
]

function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="navbar">
      <button className="sidebar-toggle" onClick={onMenuClick} type="button">
        ☰
      </button>
      <div className="navbar-brand">Sample App</div>
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

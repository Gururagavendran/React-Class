import { NavLink } from 'react-router-dom'

type SidebarProps = {
  open: boolean
  onClose: () => void
}

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
  { to: '/purchase', label: 'Purchase' },
]

function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <div className={`sidebar-overlay${open ? ' open' : ''}`} onClick={onClose}>
      <aside className={`sidebar${open ? ' open' : ''}`} onClick={(event) => event.stopPropagation()}>
        <div className="sidebar-header">
          <strong>Component Links</strong>
          <button className="sidebar-close" onClick={onClose} aria-label="Close sidebar">
            ×
          </button>
        </div>
        <ul className="sidebar-links">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  isActive ? 'sidebar-link active' : 'sidebar-link'
                }
                onClick={onClose}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar

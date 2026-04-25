import { NavLink, Outlet } from "react-router-dom";

const links = [
  { name: "Technologies", path: "/" },
  { name: "Projet", path: "/projects" },
{ name: "Formations", path: "/formations" },
  { name: "Certification", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

export default function RootLayout() {
  return (
    <div className="site">
      <header className="navbar">
      <div className="brand">
  <span>Mon</span>Portfolio
</div>

        <nav className="nav-menu">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}
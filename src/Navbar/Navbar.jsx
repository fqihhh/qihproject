import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">Faqih.</div>

        <nav>
          <ul className="navbar-menu">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
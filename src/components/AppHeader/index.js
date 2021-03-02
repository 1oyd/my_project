import "./main.css";

import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <header className="app-header">
      <nav className="app-header__nav">
        <Link to="/" className="app-header__link">
          My folders
        </Link>
      </nav>
    </header>
  );
}

export { AppHeader };

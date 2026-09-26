function Header({ activePage, onHomeClick, onContactClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <a
          href="/"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            onHomeClick();
          }}
        >
          <span className="logo-icon">🚩</span>
          <span>پرچم قرمز</span>
        </a>

        <nav className="nav">
          <a
            href="/"
            className={`nav-link ${activePage === "home" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              onHomeClick();
            }}
          >
            خانه
          </a>
          {/* 
          <a href="/about" className="nav-link">
            درباره ما
          </a> */}

          <a
            href="/contact"
            className={`nav-link ${activePage === "contact" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
            }}
          >
            تماس با من
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

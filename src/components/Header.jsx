function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          <span className="logo-icon">🚩</span>
          <span>پرچم قرمز</span>
        </a>

        <nav className="nav">
          <a href="/" className="nav-link active">
            خانه
          </a>

          <a href="/about" className="nav-link">
            درباره ما
          </a>

          <a href="/contact" className="nav-link">
            تماس با ما
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

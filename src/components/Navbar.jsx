import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        !e.target.closest(".navbar__mobile-menu") &&
        !e.target.closest(".navbar__hamburger")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Products", href: "#products" },
    { label: "Earn", href: "#earn" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Team", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNav = (href) => {
    setMenuOpen(false);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      id="navbar"
    >
      <div className="container navbar__inner">
        {/* Logo */}
        <a
          href="#hero"
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
        >
         <img
           src="/logo.png.jpeg"
           alt="Logo"
           className="navbar__logo-icon"
          />

          <span className="navbar__logo-text">
            SUNILSUCCESS<span className="text-green">MANTRA</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="navbar__nav">
          {navLinks.map((link) => (
            <button
              key={link.href}
              className="navbar__link"
              onClick={() => handleNav(link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="navbar__actions">
          <button
            className="btn-primary navbar__cta"
            onClick={() => handleNav("#contact")}
          >
            Join Now 🚀
          </button>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <button
            key={link.href}
            className="navbar__mobile-link"
            onClick={() => handleNav(link.href)}
          >
            {link.label}
          </button>
        ))}

        <button
          className="btn-primary"
          onClick={() => handleNav("#contact")}
        >
          Join Now 🚀
        </button>
      </div>
    </header>
  );
};

export default Navbar;
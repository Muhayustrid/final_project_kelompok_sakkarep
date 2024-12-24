'use client';
import "@/styles/globals.css";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigationLinks = [
    { name: 'Home', path: '#hero' },
    { name: 'Menu', path: '#menu' },
    { name: 'Profil', path: '#profile' },
    { name: 'FAQ', path: '#faq' },
  ];

  const isActivePath = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Yummy</h1>
          <span>.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav id="navmenu" className={`navmenu ${isOpen ? 'mobile-open' : ''}`}>
          <ul className="d-flex align-items-center">
            {navigationLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  href={link.path}
                  className={`nav-link ${isActivePath(link.path)}`}
                  onClick={() => setIsOpen(false)} // Close mobile menu when clicked
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <i
            className="mobile-nav-toggle d-xl-none bi bi-list"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
        </nav>

        {/* Button */}
        <Link href="#book-a-table" className="btn-getstarted">
          Book a Table
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-nav">
          <ul className="d-flex flex-column">
            {navigationLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  href={link.path}
                  className={`nav-link ${isActivePath(link.path)}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
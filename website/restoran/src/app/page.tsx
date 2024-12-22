'use client';

import Link from 'next/link';
import Category from '@/components/category';
import MenuPage from '@/components/menu';
export default function HomePage() {
  return (
    <div>
      {/* Navigasi */}
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="sitename">Yummy<span>.</span></h1>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#category">Kategori</a></li>
              <li><a href="#profile">Profil</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Konten Halaman */}
      <main>
        {/* Home Section */}
        <section id="home" className="section light-background">
          <div className="container">
            <h1>Selamat Datang di Restoran Kami</h1>
            <p>Kami menyediakan makanan terbaik untuk Anda.</p>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="section">
          <div className="container">
            <h2>Menu Kami</h2>
            <MenuPage/>
            {/* Daftar menu di sini */}
          </div>
        </section>

        {/* Category Section */}
        <section id="category" className="section light-background">
          <div className="container">
            <h2>Kategori Menu</h2>
            
            <Category/>
            {/* Kategori menu di sini */}
          </div>
        </section>

        {/* Profile Section */}
        <section id="profile" className="section">
          <div className="container">
            <h2>Profil Restoran</h2>
            <p>Informasi tentang restoran kami.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section light-background">
          <div className="container">
            <h2>FAQ</h2>
            <p>Pertanyaan yang sering diajukan.</p>
            {/* FAQ di sini */}
          </div>
        </section>
      </main>
    </div>
  );
}

import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
import Product from './components/Product';
import Nav from './components/Nav';

function Page() {
  return (
    <div style={{ flex: 1 }}>
      <Nav />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="product">
        <Product />
      </section>
      <Footer />
    </div>
  );
}

export default Page;

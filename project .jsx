import './project.css';

const cakes = [
  {
    id: 1,
    name: 'Chocolate Fudge',
    price: '₹799',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Strawberry Delight',
    price: '₹699',
    image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=800&q=80',
    tag: 'Fresh'
  },
  {
    id: 3,
    name: 'Vanilla Velvet',
    price: '₹749',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    tag: 'Popular'
  }
];

const features = [
  'Fresh ingredients',
  'Custom birthday cakes',
  'Same-day delivery',
  'Premium taste'
];

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">SweetCrave</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="primary-btn">Order Now</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-text">
            <p className="mini-tag">Freshly baked daily</p>
            <h1>Sweet moments start with a perfect cake.</h1>
            <p>
              Delicious handcrafted cakes for birthdays, anniversaries, and every celebration.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn">Explore Cakes</button>
              <button className="secondary-btn">Custom Order</button>
            </div>

            <div className="feature-list">
              {features.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=80"
              alt="Cake"
            />
          </div>
        </section>

        <section className="menu" id="menu">
          <div className="section-heading">
            <p>Our Signature Cakes</p>
            <h2>Most loved desserts</h2>
          </div>

          <div className="cake-grid">
            {cakes.map((cake) => (
              <div className="cake-card" key={cake.id}>
                <div className="badge">{cake.tag}</div>
                <img src={cake.image} alt={cake.name} />
                <h3>{cake.name}</h3>
                <div className="card-footer">
                  <span>{cake.price}</span>
                  <button>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=80"
              alt="Bakery"
            />
          </div>
          <div className="about-text">
            <p className="mini-tag">Why choose us</p>
            <h2>Baked with love and crafted with care</h2>
            <p>
              We create premium cakes using the finest ingredients, artisanal recipes,
              and customized designs for every event.
            </p>
            <ul>
              <li>Handcrafted cakes</li>
              <li>Premium ingredients</li>
              <li>On-time delivery</li>
              <li>Custom themes available</li>
            </ul>
          </div>
        </section>

        <section className="reviews" id="reviews">
          <div className="section-heading">
            <p>Customer Love</p>
            <h2>What people say</h2>
          </div>

          <div className="review-grid">
            <div className="review-card">
              <p>“The cake was delicious and looked amazing. Perfect for my daughter’s birthday!”</p>
              <h4>Riya S.</h4>
            </div>
            <div className="review-card">
              <p>“Fresh, soft, and beautifully decorated. Highly recommended!”</p>
              <h4>Arjun M.</h4>
            </div>
            <div className="review-card">
              <p>“Amazing taste and quick delivery. Will definitely order again.”</p>
              <h4>Megha P.</h4>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-box">
            <h2>Order your custom cake today</h2>
            <p>Call us at +91 98765 43210 or email hello@sweetcrave.com</p>
            <button className="primary-btn">Book a Cake</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
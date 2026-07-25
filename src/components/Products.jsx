import './Products.css'

const products = [
  {
    id: 'protein',
    img: '/protein.png',
    tag: '🏆 Best Seller',
    tagClass: 'product__tag--gold',
    name: 'ProMax Whey Protein',
    desc: 'Ultra-pure whey isolate with 30g protein per serving. Muscle growth, faster recovery, zero fillers.',
    price: '₹2,499',
    oldPrice: '₹3,200',
    rating: 4.9,
    reviews: 3241,
    commission: '25%',
    flavors: ['Chocolate', 'Vanilla', 'Strawberry'],
  },
  {
    id: 'preworkout',
    img: '/preworkout.png',
    tag: '⚡ High Energy',
    tagClass: 'product__tag--green',
    name: 'EliteCharge Pre-Workout',
    desc: 'Explosive energy, laser focus, and insane pumps. Formulated for elite athletes and serious lifters.',
    price: '₹1,799',
    oldPrice: '₹2,400',
    rating: 4.8,
    reviews: 1872,
    commission: '30%',
    flavors: ['Blue Razz', 'Watermelon', 'Mango'],
  },
  {
    id: 'vitamins',
    img: '/vitamins.png',
    tag: '💊 Daily Essentials',
    tagClass: 'product__tag--purple',
    name: 'VitalCore Multivitamin',
    desc: '25+ essential vitamins and minerals for immunity, energy, and overall wellbeing. Doctor approved formula.',
    price: '₹999',
    oldPrice: '₹1,500',
    rating: 4.7,
    reviews: 2109,
    commission: '20%',
    flavors: ['Unflavored'],
  },
]

const Stars = ({ count }) => (
  <span className="product__stars">
    {Array(5).fill(0).map((_, i) => (
      <span key={i} style={{ color: i < Math.floor(count) ? '#f0b429' : '#3a4a44' }}>★</span>
    ))}
  </span>
)

const Products = () => {
  const whatsappNumber = '+919876543210'

  const openWhatsApp = (product) => {
    const msg = encodeURIComponent(`Hi! I'm interested in buying *${product.name}* from FitPro Network. Please share more details.`)
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank')
  }

  return (
    <section className="products section-padding" id="products">
      <div className="glow-orb products__orb" />
      <div className="container">
        {/* Header */}
        <div className="products__header">
          <div className="badge">🧪 Premium Products</div>
          <h2 className="section-title">
            Scientifically Proven <br />
            <span className="text-green">Supplements</span>
          </h2>
          <p className="section-subtitle">
            Every product is lab-tested, clinically proven, and backed by thousands
            of satisfied customers across India and globally.
          </p>
        </div>

        {/* Cards */}
        <div className="products__grid">
          {products.map(p => (
            <div className="product-card glass-card" key={p.id} id={`product-${p.id}`}>
              <div className={`product__tag ${p.tagClass}`}>{p.tag}</div>
              <div className="product__img-wrap">
                <img src={p.img} alt={p.name} className="product__img" loading="lazy" />
                <div className="product__commission-badge">
                  <span>🤑</span> Earn {p.commission}
                </div>
              </div>
              <div className="product__body">
                <h3 className="product__name">{p.name}</h3>
                <p className="product__desc">{p.desc}</p>

                {/* Rating */}
                <div className="product__rating">
                  <Stars count={p.rating} />
                  <span className="product__rating-val">{p.rating}</span>
                  <span className="product__reviews">({p.reviews.toLocaleString()} reviews)</span>
                </div>

                {/* Flavors */}
                <div className="product__flavors">
                  {p.flavors.map(f => (
                    <span className="product__flavor" key={f}>{f}</span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="product__footer">
                  <div className="product__pricing">
                    <span className="product__price">{p.price}</span>
                    <span className="product__old-price">{p.oldPrice}</span>
                  </div>
                  <button
                    className="btn-whatsapp product__whatsapp"
                    id={`buy-${p.id}`}
                    onClick={() => openWhatsApp(p)}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Buy on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="products__bottom">
          <p className="text-muted">Want to become a distributor and earn commission on every sale?</p>
          <button
            className="btn-gold"
            id="products-join-btn"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            💰 Become a Distributor
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products

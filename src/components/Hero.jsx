import './Hero.css'

const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="hero">
      {/* Background glow orbs */}
      <div className="glow-orb hero__orb1" />
      <div className="glow-orb hero__orb2" />
      <div className="glow-orb hero__orb3" />

      {/* Ticker Banner */}
      <div className="hero__ticker">
        <div className="hero__ticker-track">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="hero__ticker-items">
              🏆 Join 50,000+ Members &nbsp;•&nbsp; 💪 Clinically Proven Supplements &nbsp;•&nbsp;
              💰 Earn Unlimited Income &nbsp;•&nbsp; 🌍 Network Across 30+ Countries &nbsp;•&nbsp;
              ⭐ 4.9★ Rated Products &nbsp;•&nbsp; 🚀 Start Free Today &nbsp;•&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="container hero__inner">
        {/* Left Content */}
        <div className="hero__content">
          <div className="badge">
            <span>⚡</span> #1 क्या आप जिंदगी भर खुशहाल जीवनशैली चाहते हैं?

          </div>
          <h1 className="hero__title">
            Transform Your
            <span className="hero__title-accent"> Body</span>
            <br />& Your
            <span className="hero__title-gold"> Income</span>
          </h1>
          <p className="hero__desc">
            Join Sunil Success Mantra Network — Promote premium fitness supplements, build your team,
            and earn <strong>unlimited residual income</strong>. Your health journey becomes
            your financial freedom.
          </p>

          {/* Stats Row */}
          <div className="hero__stats">
            {[
              { val: '50K+', label: 'Active Members' },
              { val: '30+', label: 'Countries' },
              { val: '₹2L+', label: 'Avg Monthly Earn' },
              { val: '4.9★', label: 'Product Rating' },
            ].map(stat => (
              <div className="hero__stat" key={stat.label}>
                <span className="hero__stat-val">{stat.val}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero__ctas">
            <button
              className="btn-primary"
              id="hero-join-btn"
              onClick={() => scrollTo('contact')}
            >
              🚀 Join Now – It's Free
            </button>
            <button
              className="btn-outline"
              id="hero-products-btn"
              onClick={() => scrollTo('products')}
            >
              View Products
            </button>
          </div>

          {/* Social Proof */}
          <div className="hero__proof">
            <div className="hero__avatars">
              {['👨🏻', '👩🏽', '👨🏾', '👩🏻', '👨🏿'].map((em, i) => (
                <span key={i} className="hero__avatar">{em}</span>
              ))}
            </div>
            <p className="hero__proof-text">
              <strong>2,300+ people</strong> joined this month
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero__visual">
          <div className="hero__image-wrap">
            <div className="hero__image-ring" />
            <img
              src="/hero.png"
              alt="FitPro Network premium supplements"
              className="hero__image"
              id="hero-product-img"
            />
            {/* Floating badges */}
            <div className="hero__badge hero__badge--1">
              <span className="hero__badge-icon">🔥</span>
              <div>
                <strong>Director</strong>
                <span></span>
              </div>
            </div>
            {/* <div className="hero__badge hero__badge--2">
              <span className="hero__badge-icon">💰</span>
              <div>
                <strong>Earn 30%</strong>
                <span>Commission</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="hero__scroll-indicator" onClick={() => scrollTo('products')} aria-label="Scroll down">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
      </button>
    </section>
  )
}

export default Hero

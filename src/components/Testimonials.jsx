import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Arjun Sharma',
    role: 'Gold Leader, Delhi',
    avatar: '👨🏻',
    rating: 5,
    income: '₹1.8L/month',
    quote: 'I was skeptical at first, but FitPro Network changed my life. Within 6 months, I replaced my entire salary. The products sell themselves — they actually work!',
    months: 8,
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Silver Partner, Mumbai',
    avatar: '👩🏽',
    rating: 5,
    income: '₹65,000/month',
    quote: 'As a fitness trainer, these supplements are the best I\'ve ever used. My clients love them and ordering through WhatsApp is super easy. Earning while helping people is amazing!',
    months: 5,
  },
  {
    id: 3,
    name: 'Rahul Verma',
    role: 'Diamond Elite, Bangalore',
    avatar: '👨🏾',
    rating: 5,
    income: '₹4.5L/month',
    quote: 'I built a team of 200+ people in one year. The support from FitPro HQ is unmatched. The training, the materials, the commission — everything is top-notch.',
    months: 14,
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'Starter, Hyderabad',
    avatar: '👩🏻',
    rating: 5,
    income: '₹22,000/month',
    quote: 'Just 3 months in and already earning more than my college internship! Started part-time, now I\'m going full-time. The protein quality is genuinely world-class.',
    months: 3,
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Gold Leader, Chandigarh',
    avatar: '👨🏿',
    rating: 5,
    income: '₹1.2L/month',
    quote: 'WhatsApp selling is so effective. My downline grew to 80 people through referrals alone. The products have a 90% repeat purchase rate — that means consistent income!',
    months: 10,
  },
  {
    id: 6,
    name: 'Meera Krishnan',
    role: 'Silver Partner, Chennai',
    avatar: '👩🏾',
    rating: 5,
    income: '₹48,000/month',
    quote: 'Being a homemaker, I never thought I\'d have my own income. FitPro Network gave me independence. I work 3 hours a day from my phone and earn more than my husband!',
    months: 7,
  },
]

const Stars = ({ count }) => (
  <span className="testimonial__stars">
    {Array(5).fill(0).map((_, i) => (
      <span key={i} style={{ color: i < count ? '#f0b429' : '#3a4a44' }}>★</span>
    ))}
  </span>
)

const Testimonials = () => {
  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="glow-orb testimonials__orb" />
      <div className="container">
        <div className="testimonials__header">
          <div className="badge">⭐ Success Stories</div>
          <h2 className="section-title">
            Real People. <span className="text-green">Real Results.</span>
          </h2>
          <p className="section-subtitle">
            Over 50,000 members across India are transforming their health and wealth with FitPro Network.
          </p>
        </div>

        {/* Grid */}
        <div className="testimonials__grid">
          {testimonials.map(t => (
            <div className="testimonial-card glass-card" key={t.id} id={`testimonial-${t.id}`}>
              <div className="testimonial__header">
                <div className="testimonial__avatar">{t.avatar}</div>
                <div className="testimonial__info">
                  <strong className="testimonial__name">{t.name}</strong>
                  <span className="testimonial__role">{t.role}</span>
                </div>
                <div className="testimonial__income">
                  <span className="testimonial__income-val">{t.income}</span>
                  <span className="testimonial__income-label">{t.months} months</span>
                </div>
              </div>
              <Stars count={t.rating} />
              <p className="testimonial__quote">"{t.quote}"</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="testimonials__cta-banner">
          <div className="testimonials__cta-text">
            <h3>You Could Be Our Next Success Story</h3>
            <p>Join for free today and start your journey to financial freedom</p>
          </div>
          <div className="testimonials__cta-btns">
            <button
              className="btn-primary"
              id="testimonials-join-btn"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🚀 Join Free Today
            </button>
            <a
              href="https://wa.me/+919876543210?text=Hi!%20I%20want%20to%20know%20more%20about%20FitPro%20Network"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              id="testimonials-whatsapp-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

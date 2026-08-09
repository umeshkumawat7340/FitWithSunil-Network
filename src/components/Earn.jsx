import './Earn.css'

const tiers = [
  {
    level: 'Level 1',
    icon: '🤝',
    title: 'Distributer',
    commission: '30%',
    desc: 'Earn 30% on every product you directly sell to customers.',
    members: 0,
    color: '#cd7f32',
  },
  {
    level: 'Level 2',
    icon: '🥇',
    title: 'Bronze',
    commission: '48%+',
    desc: 'Earn 48% on personal sales + 5% from your team\'s sales.',
    members: 5,
    color: '#adb5bd',
  },
  {
    level: 'Level 3',
    icon: '💠',
    title: 'Silver',
    commission: '48%+',
    desc: 'Earn 48% personal purchase Check + 15% from team + 3% from extended network.',
    members: 20,
    color: '#f0b429',
  },
  {
    level: 'Level 4',
    icon: '🏆',
    title: 'Gold',
    commission: '48%+',
    desc: '10% Personal Purchase Check + Maximum earning potential. Unlimited levels, car allowance, travel perks.',
    members: 100,
    color: '#7dd3fc',
  },
]

const benefits = [
  { icon: '💸', title: 'Direct Sales Commission', desc: 'Earn up to 40% on every product you sell directly' },
  { icon: '🔗', title: 'Referral Bonuses',         desc: 'Get ₹500–₹2,000 for every member you recruit' },
  { icon: '📈', title: 'Team Overrides',            desc: 'Earn % from your entire downline network sales' },
  { icon: '🎯', title: 'Monthly Incentives',        desc: 'Bonus payouts, trips, and rewards for top performers' },
  { icon: '🚗', title: 'Car & Travel Fund',         desc: 'Elite members receive car allowance & international trips' },
  { icon: '🏦', title: 'Passive Income',            desc: 'Earn while your team sells — even while you sleep' },
]

const Earn = () => {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="earn section-padding" id="earn">
      <div className="glow-orb earn__orb1" />
      <div className="glow-orb earn__orb2" />
      <div className="container">
        {/* Header */}
        <div className="earn__header">
          <div className="badge">💰 Income Opportunity</div>
          <h2 className="section-title">
            Your Body. Your Business.
            <br /><span className="text-gold">Your Fortune.</span>
          </h2>
          <p className="section-subtitle">
            FitPro Network's multi-level compensation plan rewards you at every level.
            Build a team and earn passive income forever.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="earn__tiers">
          {tiers.map((tier, i) => (
            <div
              className="earn__tier glass-card"
              key={tier.level}
              id={`tier-${i + 1}`}
              style={{ '--tier-color': tier.color }}
            >
              <div className="earn__tier-icon">{tier.icon}</div>
              <div className="earn__tier-badge">{tier.level}</div>
              <h3 className="earn__tier-title">{tier.title}</h3>
              <div className="earn__tier-commission">{tier.commission}</div>
              <p className="earn__tier-desc">{tier.desc}</p>
              {tier.members > 0 && (
                <div className="earn__tier-req">
                  Requires {tier.members}+ team members
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="earn__benefits-wrap">
          <h3 className="earn__benefits-title">What You Earn With Us</h3>
          <div className="earn__benefits">
            {benefits.map(b => (
              <div className="earn__benefit" key={b.title}>
                <div className="earn__benefit-icon">{b.icon}</div>
                <div>
                  <h4 className="earn__benefit-title">{b.title}</h4>
                  <p className="earn__benefit-desc">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Earnings Preview */}
        <div className="earn__preview glass-card">
          <div className="earn__preview-left">
            <h3>Potential Monthly Earnings</h3>
            <p className="text-muted">Based on active network members across India</p>
          </div>
          <div className="earn__preview-stats">
            {[
              { label: 'Beginner (Month 1)', val: '₹5,000–₹15,000' },
              { label: 'Growing (Month 3)', val: '₹20,000–₹60,000' },
              { label: 'Leader (Month 6)', val: '₹1L–₹3L' },
              { label: 'Elite (Year 1+)', val: '₹5L–₹10L+' },
            ].map(e => (
              <div className="earn__preview-stat" key={e.label}>
                <span className="earn__preview-val">{e.val}</span>
                <span className="earn__preview-label">{e.label}</span>
              </div>
            ))}
          </div>
          <button
            className="btn-gold"
            id="earn-start-btn"
            onClick={scrollToContact}
          >
            💎 Start Earning Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default Earn

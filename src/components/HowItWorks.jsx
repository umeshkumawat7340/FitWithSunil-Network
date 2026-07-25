import './HowItWorks.css'

const steps = [
  {
    num: '01',
    icon: '📝',
    title: 'Sign Up Free',
    desc: 'Register for free on FitPro Network. No hidden fees, no startup cost. Your account is ready in minutes.',
    color: 'var(--clr-green)',
  },
  {
    num: '02',
    icon: '📦',
    title: 'Get Your Starter Kit',
    desc: 'Receive your personal product samples, marketing materials, and training resources to start promoting.',
    color: 'var(--clr-gold)',
  },
  {
    num: '03',
    icon: '📣',
    title: 'Promote & Share',
    desc: 'Share your unique referral link on WhatsApp, social media, and to your network. We handle shipping & logistics.',
    color: '#a78bfa',
  },
  {
    num: '04',
    icon: '👥',
    title: 'Build Your Team',
    desc: 'Recruit others to join under you. Every sale your team makes adds to your residual income — automatically.',
    color: '#fb923c',
  },
  {
    num: '05',
    icon: '💸',
    title: 'Earn & Withdraw',
    desc: 'Get paid weekly directly to your bank account or UPI. No delays, no middlemen. Track everything live.',
    color: '#34d399',
  },
]

const HowItWorks = () => {
  return (
    <section className="hiw section-padding" id="how-it-works">
      <div className="glow-orb hiw__orb" />
      <div className="container">
        <div className="hiw__header">
          <div className="badge">🗺️ Simple Process</div>
          <h2 className="section-title">
            How It <span className="text-green">Works</span>
          </h2>
          <p className="section-subtitle">
            From zero to earning income in 5 simple steps. No experience needed.
            We train and support you every step of the way.
          </p>
        </div>

        {/* Steps */}
        <div className="hiw__steps">
          {steps.map((step, i) => (
            <div key={step.num} className="hiw__step" id={`step-${step.num}`}>
              <div className="hiw__step-num" style={{ color: step.color }}>{step.num}</div>
              <div className="hiw__step-line" />
              <div className="hiw__step-card glass-card">
                <div className="hiw__step-icon">{step.icon}</div>
                <div className="hiw__step-body">
                  <h3 className="hiw__step-title" style={{ color: step.color }}>{step.title}</h3>
                  <p className="hiw__step-desc">{step.desc}</p>
                </div>
                <div className="hiw__step-badge" style={{ background: step.color }}>{i + 1}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Network Diagram */}
        <div className="hiw__network glass-card">
          <div className="hiw__network-left">
            <h3 className="hiw__network-title">
              Your Network Tree
              <span className="text-green"> = Your Income</span>
            </h3>
            <p className="text-muted">
              Every person in your network who makes a sale contributes to your earnings.
              The deeper and wider your network grows, the more you earn passively.
            </p>
            <ul className="hiw__network-points">
              <li>✅ No cap on team size</li>
              <li>✅ Multi-level earnings up to 10 levels deep</li>
              <li>✅ Earn from team even when you're offline</li>
              <li>✅ Real-time tracking dashboard</li>
            </ul>
            <button
              className="btn-primary"
              id="hiw-join-btn"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🌐 Start Building Now
            </button>
          </div>
          <div className="hiw__network-img">
            <img src="/network_plan.png" alt="Network marketing tree diagram" id="network-diagram-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

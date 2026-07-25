import './About.css'

const values = [
  { icon: '🔬', title: 'Science-Backed', desc: 'All products are lab-tested and clinically proven for maximum effectiveness.' },
  { icon: '🌿', title: '100% Natural',   desc: 'No harmful fillers, artificial colors, or banned substances. Pure & clean.' },
  { icon: '🏆', title: 'Award-Winning',  desc: 'Recognized as India\'s Best Fitness MLM Brand 2024 by FitBiz Awards.' },
  { icon: '🤝', title: 'Community First', desc: '50,000+ members. We\'re a family that grows, trains, and earns together.' },
]

const milestones = [
  { year: '2019', event: 'FitPro Network Founded in Bangalore' },
  { year: '2020', event: '10,000 Members across India in Year 1' },
  { year: '2021', event: 'Expanded to 10+ Countries globally' },
  { year: '2022', event: 'Launched 15 new product lines' },
  { year: '2023', event: '₹100 Crore Revenue Milestone' },
  { year: '2024', event: '50,000+ Members. Award-Winning Network' },
]

const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="glow-orb about__orb" />
      <div className="container">
        <div className="about__grid">
          {/* Left */}
          <div className="about__content">
            <div className="badge">🏢 Our Story</div>
            <h2 className="section-title">
              Built by Fitness <br />
              <span className="text-green">Enthusiasts</span>,<br />
              For the World
            </h2>
            <p className="about__text">
              FitPro Network was born from a simple idea: what if the best fitness
              supplements were also your best business opportunity? Founded in 2019
              by a team of athletes, nutritionists, and entrepreneurs, we set out to
              build India's most trusted fitness network marketing company.
            </p>
            <p className="about__text">
              Today, we serve 50,000+ members across 30+ countries. Every product is
              manufactured in GMP-certified facilities, lab-tested, and approved by
              leading nutritionists. We don't just sell supplements — we build futures.
            </p>

            {/* Values */}
            <div className="about__values">
              {values.map(v => (
                <div className="about__value" key={v.title}>
                  <span className="about__value-icon">{v.icon}</span>
                  <div>
                    <strong className="about__value-title">{v.title}</strong>
                    <p className="about__value-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Timeline + Image */}
          <div className="about__right">
            <div className="about__img-wrap">
              <div className="glow-orb about__img-orb" />
              <img src="/fitness_people.png" alt="FitPro Network team and community" className="about__img" id="about-team-img" />
            </div>

            {/* Timeline */}
            <div className="about__timeline glass-card">
              <h3 className="about__timeline-title">Our Journey</h3>
              <div className="about__milestones">
                {milestones.map(m => (
                  <div className="about__milestone" key={m.year}>
                    <span className="about__milestone-year">{m.year}</span>
                    <span className="about__milestone-dot" />
                    <p className="about__milestone-event">{m.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

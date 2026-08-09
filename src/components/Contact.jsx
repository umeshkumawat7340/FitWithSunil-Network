import { useState } from 'react'
import './Contact.css'

const WHATSAPP_NUMBER = '+917891455632'

const Contact = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '', interest: 'both', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter valid 10-digit Indian mobile number'
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter valid email'
    return e
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    // Send via WhatsApp
    const msg = encodeURIComponent(
      `🚀 *New FitPro Network Inquiry*\n\n` +
      `👤 Name: ${form.name}\n` +
      `📱 Phone: ${form.phone}\n` +
      `📧 Email: ${form.email || 'Not provided'}\n` +
      `📍 City: ${form.city || 'Not provided'}\n` +
      `🎯 Interest: ${form.interest === 'buy' ? 'Buy Products' : form.interest === 'join' ? 'Join as Distributor' : 'Both - Buy & Join'}\n` +
      (form.message ? `💬 Message: ${form.message}` : '')
    )
    window.open(`https://wa.me/917891455632?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  const openDirectWhatsApp = () => {
    const msg = encodeURIComponent('Hi FitPro Network! I want to know more about your products and the business opportunity. 🚀')
    window.open(`https://wa.me/917891455632?text=${msg}`, '_blank')
  }

  if (submitted) {
    return (
      <section className="contact section-padding" id="contact">
        <div className="container">
          <div className="contact__success glass-card">
            <div className="contact__success-icon">🎉</div>
            <h2>Thank You, {form.name}!</h2>
            <p>Your inquiry has been sent via WhatsApp. Our team will contact you within 24 hours.</p>
            <div className="contact__success-btns">
              <button className="btn-primary" onClick={() => setSubmitted(false)} id="contact-back-btn">
                Submit Another
              </button>
              <button className="btn-whatsapp" onClick={openDirectWhatsApp} id="contact-whatsapp-again-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat Again on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="contact section-padding" id="contact">
      <div className="glow-orb contact__orb1" />
      <div className="glow-orb contact__orb2" />
      <div className="container">
        <div className="contact__inner">
          {/* Left Info Panel */}
          <div className="contact__info">
            <div className="badge">📬 Get In Touch</div>
            <h2 className="section-title">
              Ready to Start? <br />
              <span className="text-green">We're Here!</span>
            </h2>
            <p className="section-subtitle">
              Whether you want to buy our products or join as a distributor,
              our team is ready to help you get started within minutes.
            </p>

            {/* Direct WhatsApp */}
            <div className="contact__wa-card">
              <div className="contact__wa-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#25d366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <strong>Chat on WhatsApp Instantly</strong>
                <p>+91 7891455632</p>
                <p className="contact__wa-time">Available Mon–Sat, 9AM – 8PM IST</p>
              </div>
              <button className="btn-whatsapp contact__wa-btn" onClick={openDirectWhatsApp} id="direct-whatsapp-btn">
                Chat Now
              </button>
            </div>

            {/* Info Points */}
            <div className="contact__points">
              {[
                { icon: '⚡', text: 'Get a response within 1 hour' },
                { icon: '🎁', text: 'Free product sample for first-time inquiries' },
                { icon: '📊', text: 'Free business plan consultation' },
                { icon: '🔒', text: 'Your details are 100% secure and private' },
              ].map(p => (
                <div className="contact__point" key={p.text}>
                  <span>{p.icon}</span>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <form className="contact__form glass-card" onSubmit={handleSubmit} id="contact-form" noValidate>
            <h3 className="contact__form-title">Send Us a Message</h3>
            <p className="contact__form-sub">Fill the form and we'll follow up via WhatsApp</p>

            {/* Name */}
            <div className={`contact__field ${errors.name ? 'contact__field--error' : ''}`}>
              <label htmlFor="contact-name">Full Name *</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="contact__error">{errors.name}</span>}
            </div>

            {/* Phone */}
            <div className={`contact__field ${errors.phone ? 'contact__field--error' : ''}`}>
              <label htmlFor="contact-phone">WhatsApp / Phone Number *</label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <span className="contact__error">{errors.phone}</span>}
            </div>

            {/* Email */}
            <div className={`contact__field ${errors.email ? 'contact__field--error' : ''}`}>
              <label htmlFor="contact-email">Email Address (Optional)</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <span className="contact__error">{errors.email}</span>}
            </div>

            {/* City */}
            <div className="contact__field">
              <label htmlFor="contact-city">City / State</label>
              <input
                type="text"
                id="contact-city"
                name="city"
                placeholder="e.g. Mumbai, Maharashtra"
                value={form.city}
                onChange={handleChange}
              />
            </div>

            {/* Interest */}
            <div className="contact__field">
              <label htmlFor="contact-interest">I'm Interested In *</label>
              <select id="contact-interest" name="interest" value={form.interest} onChange={handleChange}>
                <option value="buy">Buying Products Only</option>
                <option value="join">Joining as Distributor / Partner</option>
                <option value="both">Both — Buy Products & Join Network</option>
              </select>
            </div>

            {/* Message */}
            <div className="contact__field">
              <label htmlFor="contact-message">Message (Optional)</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us more about what you're looking for..."
                rows={3}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <button type="submit" className="btn-primary contact__submit" id="contact-submit-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send via WhatsApp
            </button>
            <p className="contact__disclaimer">
              By submitting, your message will be sent directly via WhatsApp for faster response.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

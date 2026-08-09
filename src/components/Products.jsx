import './Products.css'

const products = [
  {
    id: 'fruits',
    img: 'public/fruits.png.jpeg',
    tag: '🍎 Healthy Choice',
    tagClass: 'product__tag--gold',
    name: 'Fresh & Natural Foods',
    desc: 'अगर आप HEALTHY NUTRITION के साथ अपनी FITNESS JOURNEY शुरू करना चाहते हैं तो अभी हमारे Nutrition Expert से बात करें और अपने लिए सही nutrition guidance पाएं।',
  },
  {
    id: 'vegetables',
    img: '/vegetables.png.jpeg',
    tag: '🥗 Daily Nutrition',
    tagClass: 'product__tag--green',
    name: 'With Healthy Nutrition',
    desc: 'अगर आप HEALTHY NUTRITION के साथ अपनी FITNESS JOURNEY शुरू करना चाहते हैं तो अभी हमारे Nutrition Expert से बात करें और healthy lifestyle की सही शुरुआत करें।',
  },
  {
    id: 'dry-fruits',
    img: '/dry-fruits.png.jpeg',
    tag: '🥜 Smart Nutrition',
    tagClass: 'product__tag--purple',
    name: 'Nuts, Seeds & Superfoods',
    desc: 'अगर आप HEALTHY NUTRITION के साथ अपनी FITNESS JOURNEY शुरू करना चाहते हैं तो अभी हमारे Nutrition Expert से बात करें और अपनी daily nutrition के लिए सही guidance लें।',
  },
]

const Products = () => {
  const whatsappNumber = '917891455632'

  const openWhatsApp = (product) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in starting my Fitness Journey with Healthy Nutrition. I want to talk to a Nutrition Expert about ${product.name}.`
    )

    window.open(
      `https://wa.me/917891455632?text=${message}`,
      '_blank'
    )
  }

  return (
    <section className="products" id="products">
      <div className="container">

        {/* Header */}
        <div className="products__header">
          <span className="products__eyebrow">
            🥗 Healthy Nutrition
          </span>

          <h2 className="products__title">
            Start Your
            <br />
            <span>Healthy Fitness Journey</span>
          </h2>

          <p className="products__subtitle" >
           <b> सही nutrition आपकी fitness journey को आसान और बेहतर बना सकता है।
            हमारे Nutrition Expert से बात करें और अपनी lifestyle के अनुसार
            सही guidance पाएं। </b>
          </p>
        </div>

        {/* Cards */}
        <div className="products__grid">
          {products.map((p) => (
            <div
              className="product-card glass-card"
              key={p.id}
              id={`product-${p.id}`}
            >
              {/* Tag */}
              <div className={`product__tag ${p.tagClass}`}>
                {p.tag}
              </div>

              {/* Image */}
              <div className="product__img-wrap">
                <img
                  src={p.img}
                  alt={p.name}
                  className="product__img"
                  loading="lazy"
                />
              </div>

              {/* Details */}
              <div className="product__body">
                <h3 className="product__name">
                  {p.name}
                </h3>

                <p className="product__desc">
                  {p.desc}
                </p>

                {/* WhatsApp CTA */}
                <button
                  className="btn-whatsapp product__whatsapp"
                  id={`nutrition-${p.id}`}
                  onClick={() => openWhatsApp(p)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>

                  Talk To Nutrition Expert
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="products__bottom">
          <p className="text-muted">
            Ready to start your healthy fitness journey?
          </p>

          <button
            className="btn-gold"
            id="products-join-btn"
            onClick={() => {
              const message = encodeURIComponent(
                'Hi! I want to start my Fitness Journey with Healthy Nutrition. I would like to talk to a Nutrition Expert.'
              )

              window.open(
                `https://wa.me/917891455632?text=${message}`,
                '_blank'
              )
            }}
          >
            💬 Talk To Nutrition Expert
          </button>
        </div>

      </div>
    </section>
  )
}

export default Products
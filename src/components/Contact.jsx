import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>KAN COLD STORAGE PRIVATE LIMITED</h3>
            <div className="contact-details">
              <p>
                <p>📍</p>
                KINFRA INDUSTRIAL PARK, PLOT NO 12
                MATTANNUR - IRIKKUR ROAD
                MATTANNUR - KANNUR - 670702
              </p>
              {/* <p>📍 MATTANNUR - IRIKKUR ROAD</p>
              <p>📍 MATTANNUR - KANNUR - 670702</p> */}
              <p>📞 1234567890</p>
              <p>📞 0123456789</p>
              <p>✉️ koncold.storage@gmail.com</p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone" />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
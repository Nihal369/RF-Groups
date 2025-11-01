import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "❄️",
      title: "COOLING STORAGE FOR AGRIPRODUCT",
      description: "Advanced cooling systems from 0°C to 4°C for optimal preservation"
    },
    {
      icon: "🕒",
      title: "24 X 7 COOLING GUARANTEED",
      description: "Round-the-clock temperature control for your agricultural products"
    },
    {
      icon: "🛡️",
      title: "24 X 7 SAFEGUARD",
      description: "Complete security and monitoring for your stored products"
    },
    {
      icon: "🚚",
      title: "LOADING & UN-LOADING",
      description: "Convenient loading and unloading services from 7am to 10pm"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
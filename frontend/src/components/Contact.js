import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="section">
      <h1>Contact</h1>
      <div className="contact-cards">
        <div className="contact-card"><i class="fas fa-at"></i> niko.hienonen@tuni.fi</div>
        <div className="contact-card"><i class="fas fa-phone"></i> +358 40 7473 797</div>
        <div className="contact-card"><i class="fas fa-map-marker-alt"></i> 33100 Tampere, Finland</div>
      </div>
    </div>
  );
};

export default Contact;
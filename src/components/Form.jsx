import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './style.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    sendCopy: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_tel: formData.phone, // Adjusted to match the template
      message: formData.message,
    };

    emailjs.send('service_ktxpnmk', 'template_ocp1h9n', templateParams, 'yPkFvDdQnjuHdwbZh')
      .then((response) => {
        alert('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          sendCopy: false,
        });

        if (formData.sendCopy) {
          // Send a copy to the user's email
          emailjs.send('service_ktxpnmk', 'template_vljnf68', {
            ...templateParams,
            to_email: formData.email,
          }, 'yPkFvDdQnjuHdwbZh')
            .then((response) => {
              alert('A copy of the email has been sent to you.');
            })
            .catch((error) => {
              alert('Failed to send a copy of the email. Error: ' + JSON.stringify(error));
            });
        }
      })
      .catch((error) => {
        alert('Failed to send email. Error: ' + JSON.stringify(error));
      });
  };

  return (
    <div className='card form-card'>
      <h1>Please <a href="tel:+14099601589" className='text-white'>CALL</a> us or fill out a submission form for a quote</h1>
      <form onSubmit={handleFormSubmit} style={{ width: 'auto' }}>
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="form4Example1"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label className="form-label" htmlFor="form4Example1">Name</label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="email"
            id="form4Example2"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label className="form-label" htmlFor="form4Example2">Email address</label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="tel"
            id="form4Example3"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <label className="form-label" htmlFor="form4Example3">Phone Number</label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <textarea
            className="form-control"
            id="form4Example4"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <label className="form-label" htmlFor="form4Example4">Message</label>
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            id="form4Example5"
            name="sendCopy"
            checked={formData.sendCopy}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="form4Example5">
            Send me a copy of this message
          </label>
        </div>

        <button data-mdb-ripple-init type="submit" className="btn btn-primary btn-block mb-4">
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;

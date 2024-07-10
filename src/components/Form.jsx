import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './style.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendCopy, setSendCopy] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setSendCopy(checked);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_ktxpnmk', 'template_ocp1h9n', templateParams, 'yPkFvDdQnjuHdwbZh')
      .then((response) => {
        alert('Email sent successfully!');
        setName('');
        setEmail('');
        setMessage('');

        if (sendCopy) {
          // Send a copy to the user's email
          emailjs.send('service_ktxpnmk', 'template_vljnf68', {
            ...templateParams,
            to_email: email,
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
      <h1>Please <a href="tel:+14099601589" className='text-white'>CALL</a> us or fill out a submission form for a quote </h1>
      <form onSubmit={handleFormSubmit} style={{ width: 'auto' }}>
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="form4Example1"
            className="form-control"
            name="name"
            value={name}
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
            value={email}
            onChange={handleInputChange}
            required
          />
          <label className="form-label" htmlFor="form4Example2">Email address</label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <textarea
            type="text"
            className="form-control"
            id="form4Example3"
            rows="4"
            name="message"
            value={message}
            onChange={handleInputChange}
            required
          ></textarea>
          <label className="form-label" htmlFor="form4Example3">Message</label>
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            id="form4Example4"
            checked={sendCopy}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="form4Example4">
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



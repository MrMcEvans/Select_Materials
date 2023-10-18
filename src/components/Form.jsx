import { useState } from 'react';
import './style.css';

function Form() {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    return name === 'name' ? setName(value): setEmail(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Hello ${name} thank you for sumbitting your email}!`);
    setName('');
    setEmail('');
  };

  return (
    <div className="container text-center">
      <h1>
        Hello {name}
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          required
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
          required
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
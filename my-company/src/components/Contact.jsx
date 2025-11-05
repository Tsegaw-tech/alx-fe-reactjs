// src/components/Contact.jsx
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We’ll get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br /><br />
        <label>
          Email:
          <input name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br /><br />
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;

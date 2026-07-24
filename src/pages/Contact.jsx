import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-20">

      <div className="max-w-2xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center">
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-4 rounded-lg"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border p-4 rounded-lg"
          />

          <button
            className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}
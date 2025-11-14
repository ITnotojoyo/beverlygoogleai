
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    succeeded: false,
    error: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ submitting: true, succeeded: false, error: false });

    // IMPORTANT: Replace this with your own Formspree endpoint URL.
    // Go to https://formspree.io/ to create a form and get your endpoint.
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_UNIQUE_FORM_ID';

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ submitting: false, succeeded: true, error: false });
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      setFormStatus({ submitting: false, succeeded: false, error: true });
    }
  };

  if (formStatus.succeeded) {
    return (
      <section id="contact" className="py-20 md:py-28 bg-gray-50 pt-32 md:pt-40 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Thank You!</h2>
          <p className="text-lg text-gray-700">Your message has been sent successfully. We'll get back to you shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50 pt-32 md:pt-40 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black animate-fadeInUp">Get In Touch</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            We'd love to hear from you. Reach out to schedule a visit or ask any questions.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-gray-700 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
            <div className="space-y-4">
              <p><strong>Address:</strong><br />Jl. Raya Tidar, Malang, Jawa Timur, Indonesia</p>
              <p><strong>Phone:</strong><br />+62 812 3456 7890</p>
              <p><strong>Email:</strong><br />sales@beverlyhillsmalang.com</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 animate-fadeInUp" style={{ animationDelay: '500ms' }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 sr-only">Name</label>
              <input type="text" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 sr-only">Email</label>
              <input type="email" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black rounded-md" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 sr-only">Message</label>
              <textarea id="message" rows={5} placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black rounded-md"></textarea>
            </div>
            <button 
              type="submit" 
              disabled={formStatus.submitting}
              className="w-full bg-black text-white font-bold py-3 px-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus.error && (
              <p className="text-red-500 text-center mt-4">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

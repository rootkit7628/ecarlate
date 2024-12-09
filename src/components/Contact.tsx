import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-accent-red" />
              <span className="text-gray-300">arleme.dev7@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MessageSquare className="h-6 w-6 text-accent-red" />
              <span className="text-gray-300">Let's discuss your project</span>
            </div>
            <p className="text-gray-400 mt-4">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out if you want to collaborate or just say hi :)
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md bg-dark-700 border-dark-600 text-gray-300 focus:border-accent-red focus:ring-accent-red"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md bg-dark-700 border-dark-600 text-gray-300 focus:border-accent-red focus:ring-accent-red"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 block w-full rounded-md bg-dark-700 border-dark-600 text-gray-300 focus:border-accent-red focus:ring-accent-red"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-red hover:bg-accent-redDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-red transition-colors duration-300"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
    
      const templateParams = {
        from_name: formData.name,
        message: formData.message,
        reply_to: formData.email,
        title: "Portfolio Contact Form",
        name: formData.name,
        time: new Date().toLocaleTimeString(),
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('EmailJS error:', error);
      
      
      alert(`Email service unavailable. Please email me directly at: satwikchandra65@gmail.com

Your message:
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-8 xs:py-12 sm:py-16 md:py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <h2 className="font-bdo text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white transition-colors leading-tight">
            get  <a href="https://www.linkedin.com/in/satwikchandra/" className="text-blue-600 dark:text-blue-400 cursor-pointer hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300">in</a> touch
          </h2>
          <p className="mt-3 xs:mt-4 sm:mt-6 text-sm xs:text-base sm:text-lg md:text-xl text-black dark:text-gray-300 transition-colors px-2 sm:px-0">
            let's convo about projects or just say hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12">
         
          <div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 transition-colors">
              let's start a conversation
            </h3>
            <p className="text-lg text-black dark:text-gray-300 mb-8 transition-colors">
              i'm always interested in hearing about new opportunities and interesting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-600 dark:text-blue-400 mr-3 transition-colors" size={20} />
                <a 
                  className="text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer" 
                  href="mailto:satwikchandra65@gmail.com?subject=Hello from your Portfolio&body=Hi Satwik,%0D%0A%0D%0AI found your portfolio and would like to connect with you.%0D%0A%0D%0ABest regards,"
                >
                  satwikchandra65@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <User className="text-blue-600 dark:text-blue-400 mr-3 transition-colors" size={20} />
                <span className="text-black dark:text-gray-300 transition-colors">Bhubaneswar, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-black dark:text-white mb-4 transition-colors">
                Connect with <span className='font-bdo text-blue-600 dark:text-blue-400'>me </span>
              </h4>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/SATWIKKKKK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/satwikchandra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a
                  href="https://x.com/satwikdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                  aria-label="Twitter Profile"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a
                  href="https://leetcode.com/u/Satwikkkkk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                  aria-label="LeetCode Profile"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.814 2.133 8.025-.068l2.68-2.581c.24-.235.619-.588.619-.588.238-.23.368-.546.368-.92 0-.37-.13-.685-.368-.92 0 0-.381-.353-.619-.588l-2.68-2.581c-2.211-2.201-5.777-2.233-8.025-.068l-.039.038-4.277 4.193a5.938 5.938 0 0 1-1.271 1.818 5.83 5.83 0 0 1-.349 1.017 5.527 5.527 0 0 1-.062 2.362 5.35 5.35 0 0 1 .125.513 5.266 5.266 0 0 1 1.209 2.104l3.854 4.126L5.638 23.562a1.374 1.374 0 0 1 .961.438 1.374 1.374 0 0 1 0 1.946L5.638 24l-.961-.438a1.374 1.374 0 0 1 0-1.946z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black dark:text-gray-300 mb-2 transition-colors">
                  name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400 dark:text-gray-500 transition-colors" size={20} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black dark:text-gray-300 mb-2 transition-colors">
                  email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400 dark:text-gray-500 transition-colors" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black dark:text-gray-300 mb-2 transition-colors">
                  message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 dark:text-gray-500 transition-colors" size={20} />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="tell me about your project..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    send message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">
                  message sent successfully! i'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
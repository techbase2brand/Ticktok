import { memo, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailjs.init('ifprOzLpDTKn2aXWb');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setError('First Name is required');
      return false;
    }
    if (!formData.lastName.trim()) {
      setError('Last Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.confirmEmail.trim()) {
      setError('Please confirm your email');
      return false;
    }
    if (formData.email !== formData.confirmEmail) {
      setError('Emails do not match');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Phone number is required');
      return false;
    }
    if (!formData.subject.trim()) {
      setError('Subject is required');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Message is required');
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess(false);

    try {
      await emailjs.send(
        'service_nfro9el',
        'template_18vvm8e',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          confirm_email: formData.confirmEmail,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'surjeeet328@gmail.com',
        }
      );

      setSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', confirmEmail: '', phone: '', subject: '', message: '' });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-black via-[#0b110c] to-[#0b110c] min-h-screen pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* LEFT SIDE - CONTENT */}
        <div className="pr-0 lg:pr-8">
          {/* Header Section */}
          <div className="mb-8">
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-4">
              CONTACT LENDING BOYS SA
            </p>
            <h1 style={{ color: '#fff' }} className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              We'd love to hear from you!
            </h1>
            <p className="text-gray-400 text-base leading-relaxed">
              To learn more about how Lending Boys SA can help you find the right loan for your needs, fill out the form below and we'll get in touch with you.
            </p>
          </div>

          {/* OFFICE INFO SECTION */}
          <div className="mt-12">
            <h2 style={{ color: '#B4FE5D' }} className="text-2xl font-bold mb-6">
              Our Office
            </h2>

            <div className="mb-6">
              <p style={{ color: '#B4FE5D' }} className="text-sm font-semibold mb-1">
                136 GreenValley Drive
              </p>
              <p style={{ color: '#B4FE5D' }} className="text-sm font-semibold">
                Greenwith, SA, 5125
              </p>
            </div>

            <div className="mb-4">
              <a href="tel:0433249678" style={{ color: '#B4FE5D' }} className="text-2xl font-bold hover:opacity-80 transition-opacity">
                0433 249 678
              </a>
            </div>

            <div>
              <a href="mailto:sim@ticktockloans.com.au" className="text-white text-sm hover:text-green-400 transition-colors">
                sim@ticktockloans.com.au
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div style={{ backgroundColor: '#384329' }} className="p-8 rounded-xl shadow-2xl">
          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-900 border border-green-500 rounded-lg">
              <p className="text-green-500 font-medium text-sm">
                ✓ Message sent successfully! We'll get back to you soon.
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-900 border border-red-500 rounded-lg">
              <p className="text-red-500 font-medium text-sm">
                ⚠ {error}
              </p>
            </div>
          )}

          <form onSubmit={onSubmit}>
            {/* First Name and Last Name Row */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-white text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg transition-all outline-none"
                  style={{
                    '--tw-ring-color': '#B4FE5D',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#B4FE5D';
                    e.target.style.boxShadow = '0 0 0 3px rgba(180, 254, 93, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '';
                    e.target.style.boxShadow = '';
                  }}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-white text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg transition-all outline-none"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#B4FE5D';
                    e.target.style.boxShadow = '0 0 0 3px rgba(180, 254, 93, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '';
                    e.target.style.boxShadow = '';
                  }}
                />
              </div>
            </div>

            {/* Email and Confirm Email Row */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg transition-all outline-none"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#B4FE5D';
                    e.target.style.boxShadow = '0 0 0 3px rgba(180, 254, 93, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '';
                    e.target.style.boxShadow = '';
                  }}
                />
              </div>
              <div>
                <label htmlFor="confirmEmail" className="block text-white text-sm font-medium mb-2">
                  Confirm Email
                </label>
                <input
                  type="email"
                  id="confirmEmail"
                  name="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  placeholder="Confirm Email"
                  className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg transition-all outline-none"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#B4FE5D';
                    e.target.style.boxShadow = '0 0 0 3px rgba(180, 254, 93, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '';
                    e.target.style.boxShadow = '';
                  }}
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg transition-all outline-none"
                onFocus={(e) => {
                  e.target.style.borderColor = '#B4FE5D';
                  e.target.style.boxShadow = '0 0 0 3px rgba(180, 254, 93, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '';
                  e.target.style.boxShadow = '';
                }}
              />
            </div>

            {/* Subject Field */}
            <div className="mb-6">
              <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg transition-all outline-none"
                onFocus={(e) => {
                  e.target.style.borderColor = '#B4FE5D';
                  e.target.style.boxShadow = '0 0 0 3px rgba(180, 254, 93, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '';
                  e.target.style.boxShadow = '';
                }}
              />
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                Comments
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                className="w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-lg transition-all outline-none resize-none"
                onFocus={(e) => {
                  e.target.style.borderColor = '#B4FE5D';
                  e.target.style.boxShadow = '0 0 0 3px rgba(180, 254, 93, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '';
                  e.target.style.boxShadow = '';
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                backgroundColor: isLoading ? '#7d9a4f' : '#B4FE5D',
                color: isLoading ? '#ffffff' : '#000000',
              }}
              className="w-full py-3 px-6 font-semibold rounded-lg transition-all duration-200"
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.target.style.backgroundColor = '#9fd46d';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.target.style.backgroundColor = '#B4FE5D';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(ContactPage);
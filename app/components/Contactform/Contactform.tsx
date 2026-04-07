import { memo, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
type ContactPageProps = {
  title: string;
  subheading: string;
  description: string;
};
const ContactPage = ({ title, subheading, description }: ContactPageProps) => {
  // call svg render here
  const call = ((
    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth={0} /> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier">
        {" "}
        <path fillRule="evenodd" clipRule="evenodd" d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z" fill="#fff" />{" "}
      </g>
    </svg>
  ));

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailjs.init('ifprOzLpDTKn2aXWb');
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

    if (!formData.phone.trim()) {
      setError('Phone number is required');
      return false;
    }

    if (!formData.message.trim()) {
      setError('Message is required');
      return false;
    }
    return true;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          phone: formData.phone,
          message: formData.message,
          to_email: 'surjeeet328@gmail.com',
        }
      );

      setSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] pt-12 md:pt-[80px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {title && <h2 className='text-3xl max-w-3xl mx-auto sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-center leading-tight mb-7 md:mb-12 text-white'>{title}</h2>}

        {/* RIGHT SIDE - FORM */}
        <div className="bg-gradient-to-b from-transparent to-[#000]/9">
          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-900 border border-green-500 rounded-lg">
              <p className="text-green-400 font-medium text-sm">
                ✓ Message sent successfully! We'll get back to you soon.
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-900 border border-red-500 rounded-lg">
              <p className="text-white font-medium text-sm">
                ⚠ {error}
              </p>
            </div>
          )}

          <form onSubmit={onSubmit}>
            {/* First Name and Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                  className="w-full px-4 py-3 md:py-5 bg-transparent text-gray-300 border border-lime-600 rounded-md placeholder-gray-300 focus:border-lime-400 focus:ring-0 focus:ring-lime-400 focus:ring-opacity-20 transition-all outline-none"
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
                  className="w-full px-4 py-3 md:py-5 bg-transparent text-gray-300 border border-lime-600 rounded-md placeholder-gray-300 focus:border-lime-400 focus:ring-0 focus:ring-lime-400 focus:ring-opacity-20 transition-all outline-none"
                />
              </div>
            </div>

            {/* Email and Confirm Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-6">
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
                  className="w-full px-4 py-3 md:py-5 bg-transparent text-gray-300 border border-lime-600 rounded-md placeholder-gray-300 focus:border-lime-400 focus:ring-0 focus:ring-lime-400 focus:ring-opacity-20 transition-all outline-none"
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
                className="w-full px-4 py-3 md:py-5 bg-transparent text-gray-300 border border-lime-600 rounded-md placeholder-gray-300 focus:border-lime-400 focus:ring-0 focus:ring-lime-400 focus:ring-opacity-20 transition-all outline-none"
              />
            </div>



            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                Comments
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What is in your mind? "
                rows={5}
                className="w-full px-4 py-5 bg-transparent text-gray-300 border border-lime-600 rounded-md placeholder-gray-300 focus:border-lime-400 focus:ring-0 focus:ring-lime-400 focus:ring-opacity-20 transition-all outline-none resize-none"
              />
            </div>
            <div className='mb-7'>
              {subheading && <h3 className='text-white text-[16px] md:text-[20px] lg:text-[20px] font-bold text-center md:text-left'>{subheading}</h3>}
              {description && <p className='text-white text-[12px] text-center md:text-left py-2'>{description}</p>}
            </div>
            {/* Submit Button */}
            <button type="submit" disabled={isLoading} className={`py-3 px-12 font-semibold cursor-pointer rounded-3xl transition-all w-fit flex duration-200 mx-auto md:mx-0 ${isLoading
              ? 'bg-lime-600 opacity-60 cursor-not-allowed text-white'
              : 'bg-[#b4fe5d] text-[#154617] hover:bg-white active:scale-95'
              }`}>
              {isLoading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(ContactPage);
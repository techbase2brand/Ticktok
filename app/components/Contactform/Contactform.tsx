"use client";

import { memo, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

type ContactPageProps = {
  title: string;
  subheading: string;
  description: string;
};

type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const ContactPage = ({ title, subheading, description }: ContactPageProps) => {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailjs.init("ifprOzLpDTKn2aXWb");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setError("First Name is required");
      return false;
    }
    if (!formData.lastName.trim()) {
      setError("Last Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    if (!formData.phone.trim()) {
      setError("Phone number is required");
      return false;
    }

    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }

    return true;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setError("");
    setSuccess(false);

    try {
      await emailjs.send("service_nfro9el", "template_18vvm8e", {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: "surjeeet328@gmail.com",
      });

      setSuccess(true);

      // ✅ reset form (fixed)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] pt-12 md:pt-[80px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {title && (
          <h2 className="text-3xl max-w-3xl mx-auto sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-center leading-tight mb-7 md:mb-12 text-white">
            {title}
          </h2>
        )}

        <div className="bg-gradient-to-b from-transparent to-[#000]/9">
          {success && (
            <div className="mb-6 p-4 bg-green-900 border border-green-500 rounded-lg">
              <p className="text-green-400 font-medium text-sm">
                ✓ Message sent successfully! We'll get back to you soon.
              </p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-900 border border-red-500 rounded-lg">
              <p className="text-white font-medium text-sm">⚠ {error}</p>
            </div>
          )}

          <form onSubmit={onSubmit}>
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="input"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="input"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="input mb-6"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="input mb-6"
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What is in your mind?"
              rows={5}
              className="input mb-6 resize-none"
            />

            <div className="mb-7">
              {subheading && (
                <h3 className="text-white text-[16px] md:text-[20px] font-bold">
                  {subheading}
                </h3>
              )}
              {description && (
                <p className="text-white text-[12px] py-2">
                  {description}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`py-3 px-12 font-semibold rounded-3xl transition-all ${isLoading
                ? "bg-lime-600 opacity-60 text-white"
                : "bg-[#b4fe5d] text-[#154617] hover:bg-white active:scale-95"
                }`}
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(ContactPage);
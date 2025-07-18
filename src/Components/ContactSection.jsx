// Import necessary icons from lucide-react
import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  Send,
} from "lucide-react";

// Import utility function for conditional classes (optional)
import { ClassN } from "../lib/utils";

// React Toastify imports for showing toasts
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React hook to manage state
import { useState } from "react";

// Contact Section Component
export const ContactSection = () => {
  // Track loading/submission state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setIsSubmitting(true); // Show loading state

    // Simulate email sending delay (e.g., API call)
    setTimeout(() => {
      // Show success toast
      toast.success("✅ Message sent successfully!");

      setIsSubmitting(false); // Reset button state
      e.target.reset(); // Clear form inputs
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      {/* Toast container must be included to show toasts */}
      <ToastContainer />

      {/* Container for section content */}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Don’t be a stranger — your next big idea might just start with a message
        </p>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">
            Contact Information
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side: contact info */}
          <div className="space-y-6 justify-center">
            {/* Individual contact item */}
            <ContactItem
              icon={<Mail className="h-6 w-6 text-primary" />}
              label="Email"
              value="nokibshahanaws@gmail.com"
              link="mailto:nokibshahanaws@gmail.com"
            />
            <ContactItem
              icon={<Phone className="h-6 w-6 text-primary" />}
              label="Phone"
              value="+880 178284 9676"
              link="tel:+8801782849687"
            />
            <ContactItem
              icon={<Linkedin className="h-6 w-6 text-primary" />}
              label="LinkedIn"
              value="linkedin.com/in/shahanaws/"
              link="https://www.linkedin.com/in/shahanaws/"
            />
            <ContactItem
              icon={<Facebook className="h-6 w-6 text-primary" />}
              label="Facebook"
              value="facebook.com/shahanaws.nokib.9"
              link="https://www.facebook.com/shahanaws.nokib.9"
            />
          </div>

          {/* Right side: contact form */}
          <div className="bg-card p-4 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-2">
              {/* Name input */}
              <FormInput
                id="name"
                label="Your Name"
                type="text"
                placeholder="Enter Your Name..."
                required
              />

              {/* Email input */}
              <FormInput
                id="email"
                label="Your Email"
                type="email"
                placeholder="example@gmail.com"
                required
              />

              {/* Message textarea */}
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Submit button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={ClassN(
                    "cosmic-button w-40 flex justify-center items-center gap-2",
                    isSubmitting && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <Send />
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>


      </div>
    </section>
  );
};

// Reusable component to show each contact item (email, phone, etc.)
const ContactItem = ({ icon, label, value, link }) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">{icon}</div>
    <div>
      <h4 className="font-medium">{label}</h4>
      <a
        href={link}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        {value}
      </a>
    </div>
  </div>
);

// Reusable form input field
const FormInput = ({ id, label, type, placeholder, required }) => (
  <div>
    <label htmlFor={id} className="block mb-2 text-sm font-medium">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
    />

    
  </div>
);

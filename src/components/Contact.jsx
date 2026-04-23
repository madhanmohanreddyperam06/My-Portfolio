import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    // Map form field names to state property names
    const stateMapping = {
      name: "name",
      email: "email",
      message: "message",
    };

    setFormData({
      ...formData,
      [stateMapping[fieldName] || fieldName]: fieldValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    // Format the current date and time in UTC as YYYY-MM-DD HH:MM:SS
    const now = new Date();
    const formattedDate = now.toISOString().replace("T", " ").substring(0, 19);

    // EmailJS configuration from environment variables
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    // Initialize EmailJS
    emailjs.init(publicKey);

    // Prepare form data for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      message: formData.message,
      to_email: "madhanmohanreddyperam06@gmail.com",
      date_time: formattedDate,
      user_login: "Madhan Mohan Reddy Peram",
    };

    emailjs
      .send(serviceId, templateId, templateParams)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setStatus((prev) => ({ ...prev, submitted: false }));
        }, 5000);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setStatus({
          submitting: false,
          submitted: false,
          error: "Failed to send message. Please try again.",
        });
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-serif text-sm text-muted mb-2">GET IN TOUCH</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">
            CONTACT ME
          </h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl font-medium mb-6"
            >
              Let's start a conversation
            </motion.h3>

            <motion.p variants={itemVariants} className="text-muted mb-8">
              Have a project in mind? Want to discuss collaboration
              opportunities? I'm always open to discussing new projects,
              creative ideas or opportunities to be part of your vision.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="space-y-4 sm:space-y-6"
            >
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="mr-3 sm:mr-4 p-2 border border-muted border-opacity-30 flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                      stroke="#F5F5F5"
                      strokeOpacity="0.8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Email</h4>
                  <a
                    href="mailto:madhanmohanreddyperam06@gmail.com"
                    className="text-sm sm:text-base text-muted hover:text-light transition-colors break-all"
                  >
                    madhanmohanreddyperam06@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="mr-3 sm:mr-4 p-2 border border-muted border-opacity-30 flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 4H9L11 9L8.5 10.5C9.57 12.6715 11.3285 14.43 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4"
                      stroke="#F5F5F5"
                      strokeOpacity="0.8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Mobile</h4>
                  <a
                    href="call : +91 9110395993"
                    className="text-sm sm:text-base text-muted hover:text-light transition-colors"
                  >
                    +91 9110395993
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="mr-3 sm:mr-4 p-2 border border-muted border-opacity-30 flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                      stroke="#F5F5F5"
                      strokeOpacity="0.8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                      stroke="#F5F5F5"
                      strokeOpacity="0.8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Location</h4>
                  <p className="text-sm sm:text-base text-muted">
                    Cuddapah, Andhra Pradesh
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="mr-3 sm:mr-4 p-2 border border-muted border-opacity-30 flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM9 19V5C9 3.89543 9.89543 3 11 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21M21 21C19.3431 21 18 20.1046 18 19C18 17.8954 19.3431 17 21 17C22.6569 17 24 17.8954 24 19C24 20.1046 22.6569 21 21 21ZM15 19C15 20.1046 13.6569 21 12 21C10.3431 21 9 20.1046 9 19C9 17.8954 10.3431 17 12 17C13.6569 17 15 17.8954 15 19Z"
                      stroke="#F5F5F5"
                      strokeOpacity="0.8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Connect</h4>
                  <div className="flex gap-3 mt-2">
                    {/* GitHub */}
                    <a
                      href="https://github.com/madhanmohanreddyperam06"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.522 21.276 9.522 21.008C9.522 20.766 9.513 20.011 9.508 19.172C6.726 19.791 6.143 17.898 6.143 17.898C5.699 16.754 5.064 16.451 5.064 16.451C4.187 15.818 5.131 15.829 5.131 15.829C6.104 15.898 6.626 16.868 6.626 16.868C7.498 18.412 8.974 17.945 9.541 17.687C9.63 17.058 9.888 16.592 10.175 16.32C7.956 16.046 5.62 15.233 5.62 11.477C5.62 10.386 6.01 9.491 6.646 8.787C6.546 8.531 6.202 7.57 6.747 6.181C6.747 6.181 7.563 5.908 9.497 7.211C10.29 7.002 11.151 6.898 12.001 6.894C12.849 6.899 13.71 7.002 14.505 7.211C16.437 5.908 17.252 6.181 17.252 6.181C17.798 7.57 17.454 8.531 17.354 8.787C17.991 9.491 18.379 10.386 18.379 11.477C18.379 15.246 16.038 16.044 13.813 16.313C14.172 16.647 14.492 17.308 14.492 18.313C14.492 19.754 14.479 20.674 14.479 21.007C14.479 21.278 14.659 21.586 15.167 21.49C19.137 20.162 22 16.418 22 12C22 6.477 17.523 2 12 2Z"
                          fill="#F5F5F5"
                        />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/madhan-mohan-reddy-peram-63181b253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.217 11.846 12.934 13.291 12.934 14.785V20.452H9.38V9H12.764V10.561H12.813C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.339 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.339 3.305C6.482 3.305 7.404 4.23 7.404 5.368C7.404 6.507 6.483 7.433 5.339 7.433ZM7.119 20.452H3.555V9H7.119V20.452Z"
                          fill="#F5F5F5"
                        />
                      </svg>
                    </a>

                    {/* Twitter */}
                    <a
                      href="https://x.com/MadhanM16616334?t=Fat391ZrwB1ZF7M1rZ6REg&s=08"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.099 19.77H18.979L7.055 4.126H5.028L17.099 19.77Z"
                          fill="#F5F5F5"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-primary bg-opacity-40 border border-muted border-opacity-10 p-4 sm:p-6"
            >
              <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">
                Send a Message
              </h3>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <div className="red-line-hover relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-secondary bg-opacity-40 border border-muted border-opacity-30 p-3 text-light focus:outline-none focus:border-light text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <div className="red-line-hover relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-secondary bg-opacity-40 border border-muted border-opacity-30 p-3 text-light focus:outline-none focus:border-light text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <div className="red-line-hover relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-secondary bg-opacity-40 border border-muted border-opacity-30 p-3 text-light focus:outline-none focus:border-light text-sm sm:text-base"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className={`btn btn-primary w-full ${status.submitting ? "opacity-70 cursor-not-allowed" : ""}`}
                disabled={status.submitting}
              >
                {status.submitting ? "Sending..." : "Send Message"}
              </button>

              {status.submitted && (
                <div className="mt-4 p-3 bg-white text-black border border-white text-center font-medium transition-all duration-300 hover:bg-transparent hover:text-white cursor-default">
                  Message sent successfully!
                </div>
              )}

              {status.error && (
                <div className="mt-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 text-center">
                  {status.error}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

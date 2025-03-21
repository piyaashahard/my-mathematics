import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { IoIosMail } from "react-icons/io"; // Correct package for IoIosMail
import { IoCallSharp } from "react-icons/io5"; // Correct package for IoCallSharp
import { MdDriveFileRenameOutline } from "react-icons/md";
import { SlUserFollowing } from "react-icons/sl";
import { FaFacebookF, FaGithub, FaWhatsapp, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { fadeIn } from "./varients";
import { FaLinkedin } from "react-icons/fa";
import { Helmet } from "react-helmet";

const SERVICE_ID = "service_insc9qz";
const TEMPLATE_ID = "template_nu4crvf";
const PUBLIC_KEY = "esEyqC79vVMGcwhKK";

const Contact = () => {
  const form = useRef();

  const handleSend = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        alert("Message sent successfully! We will contact you soon.");
      },
      (error) => {
        console.error("Failed to send message:", error);
        alert("Message failed to send. Please try again later.");
      }
    );
  };

  const contactCalls = [
    { href: "https://wa.me/+8801818927655", phoneNumber: "+8801818927655" },
  ];

  const contactEmails = [
    {
      href: "mailto:shreyandeyrudra@gmail.com",
      emailAdd: "shreyandeyrudra@gmail.com",
    },
    {
      href: "mailto:shreyandey2009@gmail.com",
      emailAdd: "shreyandey2009@gmail.com",
    },
  ];

  return (
    <>
      <Helmet>
        <title>My_Mathematics | Contact us</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className="contact"
      >
        <h1>Contact with us</h1>

        <form ref={form} onSubmit={handleSend}>
          <div className="input-div">
            <MdDriveFileRenameOutline className="icon" />
            <input type="text" name="from_name" id="name" required />
            <label htmlFor="input">Your full name</label>
          </div>

          <div className="input-div">
            <IoIosMail className="icon" />
            <input type="email" name="from_email" id="email" required />
            <label htmlFor="input">Your email address</label>
          </div>

          <div className="input-div">
            <textarea name="message" id="message" required />
            <label htmlFor="input">Your message</label>
          </div>

          <button type="submit">Send Message</button>
        </form>

        <section className="contact-row">
          <motion.div
            variants={fadeIn("up", 0)}
            initial="hidden"
            whileInView={"show"}
            className="contact-list"
          >
            <div className="call-us">
              <h1>
                <IoCallSharp className="icon" /> Call to us
              </h1>
              <p>
                We're available 08:00 AM - 10:00 PM Bangladesh, 7 days a week.
                <br />
                Call us or send a message via WhatsApp.
              </p>
              <div className="numbers">
                {contactCalls.map((call, index) => (
                  <a
                    key={index}
                    href={`${call.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {call.phoneNumber}
                  </a>
                ))}
              </div>
            </div>

            <div className="email-us">
              <h1>
                <IoIosMail className="icon" /> Write to Email us
              </h1>
              <p>
                Send an email or fill out the form, and we will contact you
                within 24 hours.
              </p>
              <div className="emails">
                {contactEmails.map((email, index) => (
                  <a
                    key={index}
                    href={email.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {email.emailAdd}
                  </a>
                ))}
              </div>
            </div>

            <div className="follow-us">
              <h1>
                <SlUserFollowing className="icon" /> Follow us
              </h1>
              <ul className="wrapper social-icons">
                <li
                  className="icon facebook"
                  onClick={() =>
                    window.open("https://www.facebook.com/shreyan1729/")
                  }
                >
                  <span className="tooltip">Facebook</span>
                  <span>
                    <FaFacebookF />
                  </span>
                </li>
                <li
                  className="icon whatsapp"
                  onClick={() => window.open("https://wa.me/+8801818927655")}
                >
                  <span className="tooltip">WhatsApp</span>
                  <span>
                    <FaWhatsapp />
                  </span>
                </li>
                <li
                  className="icon twitter"
                  onClick={() => window.open("https://x.com/ShreyanDey1729")}
                >
                  <span className="tooltip">Twitter</span>
                  <span>
                    <FaXTwitter />
                  </span>
                </li>
                <li
                  className="icon github"
                  onClick={() => window.open("https://github.com/Shreyan1729")}
                >
                  <span className="tooltip">Github</span>
                  <span>
                    <FaGithub />
                  </span>
                </li>
                <li
                  className="icon discord"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/shreyan-dey-72968b342/"
                    )
                  }
                >
                  <span className="tooltip">LinkedIn</span>
                  <span>
                    <FaLinkedin />
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.iframe
            variants={fadeIn("up", 0)}
            initial="hidden"
            whileInView={"show"}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.1579684444755!2d91.82080666560427!3d22.366401174203332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd888c5ce967f%3A0x7a943c9c0b93d2fa!2sZaman%20Bhaban%2C%20Hajee%20Nur%20Ahmed%20Road%2C%20Chittagong%204000!5e0!3m2!1sen!2sbd!4v1734108810404!5m2!1sen!2sbd"
            height="450"
            width="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></motion.iframe>
        </section>
      </motion.div>
    </>
  );
};

export default Contact;

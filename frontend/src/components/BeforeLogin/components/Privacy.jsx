import React from "react";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>My_Mathematics | Privacy & Policy</title>
      </Helmet>

      <div className="privacy-container">
        <div className="privacy-policy">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="last-updated">Last Updated: January 8, 2025</p>

          <section className="privacy-section">
            <h2>Introduction</h2>
            <p>
              Welcome to <strong>My_Mathematics</strong>, an educational
              platform dedicated to Math Olympiad preparation (BdMO and IMO).
              Your privacy is important to us, and we are committed to
              safeguarding your personal data. This Privacy Policy outlines how
              we collect, use, and protect your information when you interact
              with our website and services.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Information We Collect</h2>
            <p>
              We may collect the following personal information when you use our
              services:
            </p>
            <ul>
              <li>
                <strong>Username:</strong> The name you use to register your
                account.
              </li>
              <li>
                <strong>Email Address:</strong> For communication and account
                recovery purposes.
              </li>
              <li>
                <strong>Password:</strong> A secure password to protect your
                account.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul>
              <li>
                Provide access to educational resources on My_Mathematics.
              </li>
              <li>
                Send notifications, updates, and relevant promotional materials.
              </li>
              <li>Enhance account security and prevent unauthorized access.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Data Protection</h2>
            <p>
              We employ advanced security measures to protect your personal data
              from unauthorized access, alteration, and misuse. Your password is
              securely encrypted and is never shared with third parties.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Cookies</h2>
            <p>
              Our website uses cookies to enhance your experience. Cookies help
              us analyze site usage and deliver personalized content. You can
              manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Sharing Your Information</h2>
            <p>
              We do not sell or trade your personal information. However, we may
              share it with trusted third-party service providers who assist in
              operating our website and services. These providers are bound by
              confidentiality agreements and use your data only as necessary to
              perform their services.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>
                Request corrections to any incorrect or incomplete information.
              </li>
              <li>Request deletion of your account and associated data.</li>
              <li>Withdraw consent for data collection at any time.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Third-Party Links</h2>
            <p>
              Our website may include links to third-party websites. We are not
              responsible for their privacy practices, and we encourage you to
              review their policies before sharing your information.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Children's Privacy</h2>
            <p>
              My_Mathematics is not intended for children under 13. If you
              believe your child has provided personal information, please
              contact us, and we will promptly remove it.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be
              posted on this page with the updated "Last Updated" date. We
              encourage you to review this policy regularly.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy,
              contact us at:
            </p>
            <p>
              Email:{" "}
              <a href="mailto:shreyandeyrudra@gmail.com">
                shreyandeyrudra@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Privacy;

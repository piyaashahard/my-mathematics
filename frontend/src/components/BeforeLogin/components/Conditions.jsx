import React from "react";
import { Helmet } from "react-helmet";

const Conditions = () => {
  return (
    <>
      <Helmet>
        <title>My_Mathematics | Terms & Conditions</title>
      </Helmet>

      <div className="terms-and-condition-page">
        <main className="terms-container">
          <section className="terms-header">
            <h1>Terms & Conditions</h1>
            <p>
              Welcome to My_Mathematics. Please read these terms and conditions
              carefully before using our website.
            </p>
          </section>

          <section className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you agree to comply with and
              be bound by the following terms and conditions. If you do not
              agree with any part of these terms, you must not use this website.
            </p>
          </section>

          <section className="terms-section">
            <h2>2. Use of the Website</h2>
            <ul>
              <li>
                The content on this website is for educational purposes only.
              </li>
              <li>
                You may not use the website for any unlawful or fraudulent
                activities.
              </li>
              <li>
                Reproduction, duplication, or exploitation of any part of the
                website without prior written permission is strictly prohibited.
              </li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>3. Intellectual Property</h2>
            <p>
              All content, including text, graphics, logos, and other materials,
              is the intellectual property of My_Mathematics unless otherwise
              stated. Unauthorized use of any content may violate copyright,
              trademark, and other laws.
            </p>
          </section>

          <section className="terms-section">
            <h2>4. Limitation of Liability</h2>
            <p>
              My_Mathematics is not liable for any direct, indirect, incidental,
              or consequential damages arising from your use of the website. The
              content provided is "as is" without any guarantees of accuracy or
              reliability.
            </p>
          </section>

          <section className="terms-section">
            <h2>5. User Conduct</h2>
            <ul>
              <li>
                Users must maintain respectful and professional behavior while
                interacting with the website and its community.
              </li>
              <li>
                Any attempt to harm, disrupt, or misuse the website's services
                will result in immediate termination of access.
              </li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>6. Updates to Terms</h2>
            <p>
              My_Mathematics reserves the right to update these terms and
              conditions at any time. It is your responsibility to review this
              page periodically for any changes.
            </p>
          </section>

          <section className="terms-section">
            <h2>7. Governing Law</h2>
            <p>
              These terms and conditions are governed by the laws of Bangladesh.
              Any disputes arising out of or related to the use of this website
              shall be resolved under the jurisdiction of the courts of
              Bangladesh.
            </p>
          </section>

          <section className="terms-footer">
            <p>
              If you have any questions about these Terms & Conditions, please
              contact us at{" "}
              <a href="mailto:shreyandeyrudra@gmail.com">
                shreyandeyrudra@gmail.com
              </a>
              .
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default Conditions;

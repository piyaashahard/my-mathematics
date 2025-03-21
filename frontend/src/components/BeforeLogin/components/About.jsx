import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>My_Mathematics | About Us</title>
      </Helmet>
      
      <div className="about-page-container">
        <main className="about-page">
          <section className="about-introduction">
            <h2 className="section-title">Welcome to My_Mathematics</h2>
            <p className="section-description">
              This educational website is a comprehensive platform designed to
              help you excel in Math Olympiads, including BdMO (Bangladesh
              Mathematical Olympiad), IMO (International Mathematical Olympiad),
              and APMO (Asian Pacific Mathematical Olympiad). Here, you can
              prepare effectively for Math Olympiads, build confidence in your
              problem-solving skills, and access a wealth of resources.
              <br />
              The platform offers all the essential formulas commonly used in
              Olympiads, a vast collection of past Olympiad questions, and a
              curated list of recommended books to help you crack these
              prestigious competitions.
              <br />
              This website is developed by Shreyan Dey, a skilled full-stack web
              developer, and beautifully designed by UX-UI designer Emam Hossain
              Miraj, ensuring a seamless and user-friendly experience for
              learners. Join us to master mathematics and achieve Olympiad
              success!
            </p>
            <p className="section-description">
              My_Mathematics is your ultimate companion for excelling in Math
              Olympiads, including the BdMO (Bangladesh Mathematical Olympiad)
              and IMO (International Mathematical Olympiad). Our mission is to
              provide top-notch resources, expert lessons, and practice
              materials in core areas like Algebra, Number Theory, Geometry, and
              Combinatorics.
            </p>
          </section>

          <section className="course-overview">
            <h2 className="section-title">Our Courses</h2>
            <p className="section-description">
              Explore our meticulously crafted courses designed to boost your
              mathematical skills:
            </p>

            <div className="course-category">
              <h3 className="category-title">Number Theory</h3>
              <ul className="category-list">
                <li>Divisibility and Modular Arithmetic</li>
                <li>Prime Numbers and Sieve Methods</li>
                <li>Fermat's and Euler's Theorems</li>
                <li>Diophantine Equations</li>
                <li>Chinese Remainder Theorem</li>
              </ul>
            </div>

            <div className="course-category">
              <h3 className="category-title">Algebra</h3>
              <ul className="category-list">
                <li>Polynomials and Factoring Techniques</li>
                <li>Symmetric Polynomials and Vieta’s Formulas</li>
                <li>AM-GM and Cauchy-Schwarz Inequalities</li>
                <li>Roots of Unity and Complex Numbers</li>
                <li>Recurrence Relations and Functional Equations</li>
              </ul>
            </div>

            <div className="course-category">
              <h3 className="category-title">Geometry</h3>
              <ul className="category-list">
                <li>Triangles, Circles, and Polygons</li>
                <li>Congruence and Similarity</li>
                <li>Power of a Point and Cyclic Quadrilaterals</li>
                <li>Coordinate and Vector Geometry</li>
                <li>Advanced Theorems: Ceva, Menelaus, and Euler Line</li>
              </ul>
            </div>

            <div className="course-category">
              <h3 className="category-title">Combinatorics</h3>
              <ul className="category-list">
                <li>Permutations, Combinations, and Binomial Theorem</li>
                <li>Graph Theory and Generating Functions</li>
                <li>Inclusion-Exclusion Principle</li>
                <li>Pigeonhole Principle and Double Counting</li>
                <li>Partition Theory and Recurrence Relations</li>
              </ul>
            </div>
          </section>

          <section className="why-choose-us">
            <h2 className="section-title">Why Choose Us?</h2>
            <ul className="features-list">
              <li>Expert-curated content for Math Olympiad preparation.</li>
              <li>Comprehensive practice problems with detailed solutions.</li>
              <li>Personalized learning paths and progress tracking.</li>
              <li>Supportive community for discussions and collaboration.</li>
            </ul>
          </section>

          <section className="contact-info">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-description">
              Have questions? Get in touch with us:
            </p>
            <ul className="contact-list">
              <li>
                Email:{" "}
                <a href="mailto:shreyandeyrudra@gmail.com">
                  shreyandeyrudra@gmail.com
                </a>
              </li>
              <li>
                Phone: <a href="tel:+8801818927655">+880 1818 927655</a>
              </li>
              <li>
                Social Media: Follow us on Facebook, Twitter, and Instagram
              </li>
            </ul>
          </section>

          <section className="conclusion">
            <h2 className="section-title">Start Your Journey Today</h2>
            <p className="section-description">
              Join <strong>My_Mathematics</strong> and unlock your potential in
              mathematics. Explore our courses and take the first step towards
              Math Olympiad success!
            </p>
            <button
              className="explore-button"
              onClick={() => (window.location.href = "/all-courses")}
            >
              Explore Courses
            </button>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;

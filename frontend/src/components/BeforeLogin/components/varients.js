import { mathBanner, mathBG } from "../images/images";

export const NTCourses = [
  { title: "Divisibility" },
  { title: "GCD & LCM" },
  { title: "Modular Arithmetic" },
  { title: "Congruence" },
  { title: "Chinese Remainder Theorem" },
  { title: "Prime Numbers" },
  { title: "Sieve of Eratosthenes" },
  { title: "Diophantine Equation" },
  { title: "Fermat's Little Theorem" },
  { title: "Euler's Theorem" },
  { title: "Wilson's Theorem" },
  { title: "Pigeonhole Principle" },
  { title: "Arithmetic Functions" },
  { title: "AM-GM Inequality" },
  { title: "Bézout's Identity" },
  { title: "Fermat's Last Theorem" },
];

export const ACourses = [
  { title: "Pre-Algebra", path: "pre-algebra" },
  { title: "Algebraic Identities", path: "algebraic-identities" },
  { title: "Vieta's Formula", path: "vieta-formula" },
  { title: "Symmetric Polynomials", path: "symmetric-polynomials" },
  { title: "Remainder Theorem", path: "remainder-theorem" },
  { title: "Factor Theorem", path: "factor-theorem" },
  { title: "Binomial Theorem", path: "binomial-theorem" },
  { title: "AM-GM Inequality", path: "am-gm-inequality" },
  { title: "Cauchy-Schwarz Inequality", path: "cauchy-schwarz-inequality" },
  { title: "Jensen's Inequality", path: "jensen-inequality" },
  { title: "Arithmetic Progression (AP)", path: "arithmetic-progression" },
  { title: "Geometric Progression (GP)", path: "geometric-progression" },
  { title: "Recurrence Relations", path: "recurrence-relations" },
  { title: "Functional Equations", path: "functional-equations" },
  { title: "Roots of Unity", path: "roots-of-unity" },
  { title: "Logarithm", path: "logarithm" },
  { title: "Complex Numbers", path: "complex-numbers" },
  { title: "De Moivre's Theorem", path: "de-moivres-theorem" },
  { title: "Argand Plane", path: "argand-plane" },
  { title: "Cyclotomic Polynomials", path: "cyclotomic-polynomials" },
  { title: "Lagrange Interpolation", path: "lagrange-interpolation" },
  { title: "Polynomial Inequalities", path: "polynomial-inequalities" },
  { title: "Symmetric Expressions", path: "symmetric-expressions" },
  { title: "Homogeneous Expressions", path: "homogeneous-expressions" },
  { title: "Cyclic Expressions", path: "cyclic-expressions" },
  { title: "Newton's Sums", path: "newtons-sums" },
  { title: "Graphical Insights", path: "graphical-insights" },
  { title: "Mathematical Induction", path: "mathematical-induction" },
  { title: "Bounding Techniques", path: "bounding-techniques" },
];

export const GCourses = [
  { title: "Points, Lines & Angles" },
  { title: "Triangles" },
  { title: "Triangle Inequality" },
  { title: "Circles" },
  { title: "Polygons" },
  { title: "Pythagorean Theorem" },
  { title: "Trigonometric Ratios" },
  { title: "Stewart's Theorem" },
  { title: "Apollonius' Theorem" },
  { title: "Inscribed Angle Theorem" },
  { title: "Tangent-Secant Theorem" },
  { title: "Power of a Point Theorem" },
  { title: "Cyclic Quadrilaterals" },
  { title: "Congruence & Similarity" },
  { title: "Ceva's Theorem" },
  { title: "Menelaus' Theorem" },
  { title: "Euler Line" },
  { title: "Nine-Point Circle" },
  { title: "Desargues' and Pascal's Theorems" },
  { title: "Coordinate Geometry" },
  { title: "Vector Geometry" },
];

export const CCourses = [
  { title: "Fundamental Counting Principle" },
  { title: "Permutation & Combination" },
  { title: "Binomial Theorem" },
  { title: "Pascal's Theorem" },
  { title: "Inclusion - Exclusion Principle" },
  { title: "Pigeonhole Principle" },
  { title: "Graph Theory" },
  { title: "Recurrence Relations" },
  { title: "Generating functions" },
  { title: "Modular Arithmetic" },
  { title: "Partition Theory" },
  { title: "Double Counting" },
  { title: "Inversions & Permutations" },
  { title: "Combinatorial Proofs" },
  { title: "Angle Chasing" },
  { title: "Locus problems" },
  { title: "Trigonometric methods" },
];

export const blogPosts = [
  {
    id: 1,
    title: "The Beauty of Prime Numbers",
    author: "John Doe",
    date: "January 15, 2025",
    summary:
      "Discover the fascinating world of prime numbers and their applications in cryptography, computer science, and number theory.",
    image: mathBanner,
    url: "/signup",
  },
  {
    id: 2,
    title: "Understanding Geometry Through Real-Life Examples",
    author: "Jane Smith",
    date: "January 10, 2025",
    summary:
      "Learn how geometry shapes our world, from architecture to nature. Explore real-life examples that make geometry fun and relatable.",
    image: mathBG,
    url: "/signup",
  },
  {
    id: 3,
    title: "10 Tips to Prepare for Math Olympiads",
    author: "Emily Brown",
    date: "January 5, 2025",
    summary:
      "Ace your math olympiad preparation with these 10 essential tips, including problem-solving techniques and time management strategies.",
    image: mathBanner,
    url: "/signup",
  },
];

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 100 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

// export const fadeIn = (direction, type, delay, duration) => {
//   return {
//     hidden: {
//       x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
//       y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//       opacity: 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: type,
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// export const slideIn = (direction, type, delay, duration) => {
//   return {
//     hidden: {
//       x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
//       y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       transition: {
//         type: type,
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };

// export const staggerContainer = (staggerChildren, delayChildren) => {
//   return {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: staggerChildren,
//         delayChildren: delayChildren || 0,
//       },
//     },
//   };
// };

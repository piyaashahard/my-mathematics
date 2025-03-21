import logo from "./logo.png";
import multiply from "./multiply.svg";
import doing from "./doing_somthing.svg";
import algebra from "./gerometry.svg";
import geometry from "./algebra.svg";
import number from "./Number.svg";
import combinatorics from "./com.svg";
import IMO from "./imo.gif";
import APMO from "./apmo.png";
import BdMO from "./BdMO.jpg";
import AMC from "./amc.jpg";
import EGMO from "./egmo.png";

import Newsletter from "./Newsletter.png";

import homeBanner from "./backgroundOfHome.png";
import mathBanner from "./math_banner.png";
import mathBG from "./mathbg.png";

import ThumbsUp from "./ThumbsUp.gif";
import Block from "./Block.gif";
import PdfIcon from "./pdf-icon.svg";
import instagramLogo from "./instagram.svg";

import FreeIcon from "./free.png";
import learnWithAnimation from "./learnWithAnimation.jpg";
import SupportiveCommunity from "./SupportiveCommunity.jpeg";

import SrinivasaRamanujan from "./Srinivasa_Ramanujan.png";
import Newton from "./Sir_Isaac_Newton.jpg";
import Euclid from "./Euclid.webp";
import Euler from "./Leonhard Euler.jpg";
import Laplace from "./Pierre-Simon Laplace.jpg";
import Riemann from "./Bernhard Riemann.png";
import Neumann from "./John von Neumann.png";
import Pascal from "./Blaise Pascal.jpg";
import Fourier from "./Joseph Fourier.webp";
import Descartes from "./Rene Descartes.jpg";
import Cayley from "./Arthur Cayley.jpg";
import Cantor from "./Georg Cantor.webp";
import Germain from "./Sophie Germain.png";
import Hilbert from "./David Hilbert.png";
import Turing from "./Alan Turing.png";
import Godel from "./Godel.jpg";
import Abel from "./Niels Henrik Abel.png";
import Cartwright from "./Mary Cartwright.png";
import Shakuntala from "./Shakuntala Devi.jpeg";
import Aryabhata from "./Aryabhata.jpeg";
import Bhaskara from "./Bhaskara.jpeg";
import Brahmagupta from "./Brahmagupta.png";
import Mahavira from "./Mahavira.jpg";
import Madhava from "./Madhava of Sangamagrama.jpg";
import Nilakantha from "./Nilakantha Somayaji.jpg";
import Varahamihira from "./Varahamihira.jpeg";
import NarayanPandit from "./Narayan Pandit.jpeg";
import BhaskaraI from "./BhaskaraI.jpg";
import Manava from "./Manava.webp";
import AlKhwarizmi from "./AlKhwarizmi.jpeg";
import OmarKhayyam from "./OmarKhayyam.jpeg";
import AlBiruni from "./AlBiruni.jpg";
import IbnAlHaytham from "./IbnAlHaytham.jpeg";
import AlTusi from "./Nasir al-Din al-Tusi.jpeg";
import SharafAlDin from "./Sharaf al-Din al-Tusi.jpeg";
import ThabitIbnQurra from "./Thabit ibn Qurra.jpeg";

export {
  Newsletter,
  homeBanner,
  SupportiveCommunity,
  learnWithAnimation,
  logo,
  FreeIcon,
  multiply,
  doing,
  geometry,
  algebra,
  combinatorics,
  number,
  IMO,
  APMO,
  BdMO,
  AMC,
  EGMO,
  mathBG,
  mathBanner,
  ThumbsUp,
  Block,
  PdfIcon,
  instagramLogo,
  SrinivasaRamanujan,
  Newton,
  Euclid,
  Euler,
  Laplace,
  Riemann,
  Neumann,
  Pascal,
  Fourier,
  Descartes,
  Cayley,
  Cantor,
  Germain,
  Hilbert,
  Turing,
  Godel,
  Abel,
  Cartwright,
  Shakuntala,
};

export const mathematicians = [
  {
    id: 1,
    name: "Srinivasa Ramanujan",
    image: SrinivasaRamanujan,
    achievements:
      "An Indian mathematician known for his groundbreaking contributions to number theory, infinite series, continued fractions, and mathematical analysis. He independently developed complex mathematical theories that were later proven to be of great significance. His work on the Ramanujan Prime, Ramanujan-Hardy Number, and the partition function is particularly notable.",
    birthYear: 1887,
    deathYear: 1920,
    birthplace: "Erode, Tamil Nadu, India",
    notableWorks: [
      "Ramanujan's Master Theorem",
      "Tau Function",
      "Partition Function",
      "Hardy-Ramanujan Number (1729)",
    ],
    legacy:
      "Despite minimal formal training, Ramanujan's work profoundly impacted mathematics and continues to inspire research. His collaboration with G.H. Hardy led to significant discoveries in number theory.",
    awards: ["Fellow of the Royal Society (1918)"],
  },
  {
    id: 2,
    name: "Euclid",
    image: Euclid, // Local image or URL
    achievements:
      "Euclid, often referred to as the 'father of geometry,' made foundational contributions to the field of geometry. His work, 'Elements,' is one of the most influential works in the history of mathematics, forming the basis of modern geometry. He also introduced rigorous logical proofs and systematic organization of mathematical knowledge.",
    birthYear: "300 BCE",
    deathYear: "265 BCE",
    birthplace: "Alexandria, Egypt",
    notableWorks: [
      "Elements",
      "Euclidean Algorithm",
      "Postulates of Euclidean Geometry",
      "Definitions and Axioms",
    ],
    legacy:
      "Euclid's systematic approach to geometry has shaped the field for over two millennia. His logical structure influenced the development of modern mathematics and the teaching of mathematics worldwide. His work continues to be a cornerstone in mathematical education and research.",
    impact:
      "Euclid's 'Elements' served as the main textbook for teaching mathematics until the late 19th century. His methods laid the groundwork for modern geometry and inspired future mathematicians to expand on his theories.",
    awards: [],
  },
  {
    id: 3,
    name: "Isaac Newton",
    image: Newton, // Local image or URL
    achievements:
      "Newton was an English mathematician, physicist, astronomer, and author who is widely recognized as one of the most influential scientists of all time. He is famous for developing the theory of gravitation and formulating the laws of motion and calculus.",
    birthYear: 1643,
    deathYear: 1727,
    birthplace: "Woolsthorpe, Lincolnshire, England",
    notableWorks: [
      "Philosophiæ Naturalis Principia Mathematica",
      "Mathematical Principles of Natural Philosophy",
      "The Method of Fluxions",
    ],
    legacy:
      "Newton's laws of motion and his theory of gravitation laid the groundwork for classical mechanics. His work in calculus and optics also revolutionized scientific understanding and advanced mathematical theory.",
    awards: [
      "Knight of the Realm (1705)",
      "President of the Royal Society (1703–1727)",
    ],
  },
  {
    id: 5,
    name: "Leonhard Euler",
    image: Euler, // Local image or URL
    achievements:
      "Euler was a Swiss mathematician and physicist who made significant contributions to a wide variety of areas, including graph theory, topology, mechanics, fluid dynamics, and astronomy. His formula for complex exponentiation is one of the most famous results in mathematics.",
    birthYear: 1707,
    deathYear: 1783,
    birthplace: "Basel, Switzerland",
    notableWorks: [
      "Euler's Formula (e^(iπ) + 1 = 0)",
      "Euler's Identity",
      "Euler's Theorem in Number Theory",
    ],
    legacy:
      "Euler's contributions to mathematics are vast, with his work forming the basis for modern analysis and many areas of applied mathematics. He is also credited with creating much of the mathematical notation we use today.",
    awards: [],
  },
  {
    id: 6,
    name: "Pierre Simon Marquis de Laplace",
    image: Laplace, // Local image or URL
    achievements:
      "Laplace was a French mathematician and astronomer who formulated the Laplace equation, contributed to the understanding of celestial mechanics, and made key advancements in probability theory and statistics.",
    birthYear: 1749,
    deathYear: 1827,
    birthplace: "Beaumont-en-Auge, France",
    notableWorks: [
      "Mécanique Céleste",
      "Laplace Transform",
      "The Laplace Equation",
    ],
    legacy:
      "Laplace’s work in celestial mechanics and statistics has had a profound impact on both mathematics and physics. His celestial mechanics laid the foundation for the study of orbits and planetary motion.",
    awards: [],
  },
  {
    id: 7,
    name: "Bernhard Riemann",
    image: Riemann, // Local image or URL
    achievements:
      "Riemann was a German mathematician who made significant contributions to analysis, differential geometry, and the study of prime numbers. His Riemann hypothesis is one of the most famous unsolved problems in mathematics.",
    birthYear: 1826,
    deathYear: 1866,
    birthplace: "Breselenz, Kingdom of Hanover",
    notableWorks: [
      "Riemann Hypothesis",
      "Riemannian Geometry",
      "Riemann Zeta Function",
    ],
    legacy:
      "Riemann’s work in geometry and number theory has had a profound impact on modern mathematics. The Riemann Hypothesis remains one of the most important unsolved problems in mathematics.",
    awards: [],
  },
  {
    id: 8,
    name: "John von Neumann",
    image: Neumann, // Local image or URL
    achievements:
      "Von Neumann was a Hungarian-American mathematician who made contributions to fields such as quantum mechanics, game theory, and computer science. He was a key figure in the development of the first computers and the creation of game theory.",
    birthYear: 1903,
    deathYear: 1957,
    birthplace: "Budapest, Hungary",
    notableWorks: [
      "Von Neumann Architecture",
      "Game Theory",
      "Mathematical Logic",
    ],
    legacy:
      "Von Neumann's work in computing and game theory has had a lasting influence on both fields. His contributions to the development of the computer architecture we use today remain foundational.",
    awards: ["Enrico Fermi Award (1956)", "National Medal of Science (1963)"],
  },
  {
    id: 9,
    name: "Blaise Pascal",
    image: Pascal, // Local image or URL
    achievements:
      "Pascal was a French mathematician, physicist, and inventor known for his work in probability theory and fluid mechanics. He is also known for developing Pascal’s Triangle, which is fundamental in algebra and combinatorics.",
    birthYear: 1623,
    deathYear: 1662,
    birthplace: "Clermont-Ferrand, France",
    notableWorks: [
      "Pascal's Triangle",
      "Pascal's Theorem",
      "Theory of Probability",
    ],
    legacy:
      "Pascal’s work in probability theory laid the groundwork for modern statistics and risk theory. His contributions to fluid mechanics and pressure were also groundbreaking.",
    awards: [],
  },
  {
    id: 10,
    name: "Joseph Fourier",
    image: Fourier, // Local image or URL
    achievements:
      "Fourier was a French mathematician and physicist best known for developing the Fourier series and Fourier transform, which are used in signal processing and heat transfer analysis.",
    birthYear: 1768,
    deathYear: 1830,
    birthplace: "Auxerre, France",
    notableWorks: [
      "Fourier Series",
      "Fourier Transform",
      "The Analytical Theory of Heat",
    ],
    legacy:
      "Fourier's work has had profound applications in physics, engineering, and signal processing. The Fourier Transform is widely used in many fields such as image processing, communications, and data compression.",
    awards: [],
  },
  {
    id: 11,
    name: "René Descartes",
    image: Descartes, // Local image or URL
    achievements:
      "Descartes was a French philosopher, mathematician, and scientist. He is considered the father of modern philosophy and made significant contributions to geometry, developing the Cartesian coordinate system, which bridges algebra and geometry.",
    birthYear: 1596,
    deathYear: 1650,
    birthplace: "La Haye en Touraine, France",
    notableWorks: [
      "Discourse on the Method",
      "La Géométrie",
      "Meditations on First Philosophy",
    ],
    legacy:
      "Descartes' Cartesian coordinates laid the foundation for analytic geometry and calculus. His work in philosophy also influenced the development of modern scientific thought.",
    awards: [],
  },
  {
    id: 12,
    name: "Arthur Cayley",
    image: Cayley, // Local image or URL
    achievements:
      "Cayley was an English mathematician known for his work in group theory, matrix theory, and algebra. He was one of the founders of modern group theory and made major contributions to the development of abstract algebra.",
    birthYear: 1821,
    deathYear: 1895,
    birthplace: "London, England",
    notableWorks: [
      "Cayley-Hamilton Theorem",
      "Cayley’s Tables",
      "Group Theory",
    ],
    legacy:
      "Cayley’s work in algebra and group theory significantly influenced the development of modern abstract algebra and geometry. His contributions remain central in these fields.",
    awards: [],
  },
  {
    id: 13,
    name: "Georg Cantor",
    image: Cantor, // Local image or URL
    achievements:
      "Cantor was a German mathematician who founded set theory and introduced the concept of infinite numbers with his theory of cardinality. His work on the concept of different sizes of infinity revolutionized the understanding of mathematics.",
    birthYear: 1845,
    deathYear: 1918,
    birthplace: "Saint Petersburg, Russia",
    notableWorks: [
      "Set Theory",
      "Cantor's Diagonal Argument",
      "Cardinality of Infinite Sets",
    ],
    legacy:
      "Cantor’s theory of sets and infinity has become a fundamental part of modern mathematics, influencing fields like topology, analysis, and logic.",
    awards: [],
  },
  {
    id: 15,
    name: "Sophie Germain",
    image: Germain, // Local image or URL
    achievements:
      "Germain was a French mathematician who made significant contributions to number theory and elasticity theory. Her work in the theory of prime numbers and her correspondence with Carl Friedrich Gauss helped pave the way for women in mathematics.",
    birthYear: 1776,
    deathYear: 1831,
    birthplace: "Paris, France",
    notableWorks: [
      "Theory of Elasticity",
      "Germain’s Theorem in Number Theory",
    ],
    legacy:
      "Sophie Germain’s pioneering work in number theory and elasticity remains influential in mathematics and engineering, and her perseverance against societal barriers inspired future generations of women in science.",
    awards: [],
  },
  {
    id: 16,
    name: "David Hilbert",
    image: Hilbert, // Local image or URL
    achievements:
      "Hilbert was a German mathematician who developed the concept of Hilbert space, a central concept in functional analysis. His work in algebra, geometry, and the foundations of mathematics has had a lasting impact on many areas of mathematics.",
    birthYear: 1862,
    deathYear: 1943,
    birthplace: "Königsberg, Prussia (now Kaliningrad, Russia)",
    notableWorks: [
      "Hilbert Space",
      "Hilbert's Problems",
      "Foundations of Geometry",
    ],
    legacy:
      "Hilbert’s formalist approach to mathematics and his 23 famous problems have influenced the direction of mathematical research in the 20th century and beyond.",
    awards: [],
  },
  {
    id: 17,
    name: "Alan Turing",
    image: Turing, // Local image or URL
    achievements:
      "Turing was an English mathematician, computer scientist, and cryptanalyst who is widely regarded as the father of theoretical computer science and artificial intelligence. His work on the Turing machine and the breaking of the Enigma code during World War II had a profound impact on mathematics and computing.",
    birthYear: 1912,
    deathYear: 1954,
    birthplace: "Maida Vale, London, England",
    notableWorks: [
      "Turing Machine",
      "Turing Test",
      "Codebreaking during World War II",
    ],
    legacy:
      "Turing's work laid the foundation for modern computing, artificial intelligence, and theoretical computer science. His contributions are pivotal to the development of algorithms and computational theory.",
    awards: [
      "Order of the British Empire (1945)",
      "Turing Award (1966, posthumously)",
    ],
  },
  {
    id: 18,
    name: "Kurt Gödel",
    image: Godel, // Local image or URL
    achievements:
      "Gödel was an Austrian-American mathematician and logician who is best known for his incompleteness theorems, which showed that in any consistent formal system, there are true statements that cannot be proven within the system.",
    birthYear: 1906,
    deathYear: 1978,
    birthplace: "Brünn, Austria-Hungary (now Brno, Czech Republic)",
    notableWorks: [
      "Gödel’s Incompleteness Theorems",
      "Gödel-Löwenheim Theorem",
    ],
    legacy:
      "Gödel's incompleteness theorems have had a profound impact on mathematics, logic, and the philosophy of mathematics, demonstrating inherent limitations in formal systems.",
    awards: [],
  },
  {
    id: 19,
    name: "Niels Henrik Abel",
    image: Abel, // Local image or URL
    achievements:
      "Abel was a Norwegian mathematician known for his work in algebra, particularly the Abel-Ruffini theorem, which states that there is no general solution in radicals to polynomial equations of degree five or higher.",
    birthYear: 1802,
    deathYear: 1829,
    birthplace: "Finnøy, Norway",
    notableWorks: ["Abel-Ruffini Theorem", "Abel's Theorem"],
    legacy:
      "Abel's work laid the groundwork for modern algebra and contributed significantly to the understanding of the solvability of polynomial equations.",
    awards: [],
  },
  {
    id: 20,
    name: "Mary Cartwright",
    image: Cartwright, // Local image or URL
    achievements:
      "Mary Cartwright was a British mathematician who made significant contributions to the study of nonlinear differential equations and chaos theory. She is best known for her work with J. E. Littlewood on the theory of oscillations in electrical circuits, which laid the groundwork for the study of chaos.",
    birthYear: 1900,
    deathYear: 1998,
    birthplace: "Aylesbury, England",
    notableWorks: [
      "Theory of Nonlinear Oscillations",
      "Cartwright-Littlewood Equation",
    ],
    legacy:
      "Cartwright's pioneering work in chaos theory and nonlinear dynamics helped to establish these fields as key areas of research in mathematics and physics. Her contributions to understanding the behavior of complex systems continue to influence studies in many scientific disciplines.",
    awards: [
      "Dame Commander of the Order of the British Empire (1969)",
      "Royal Society Fellow (1947)",
    ],
  },
  {
    id: 99, // Ensure this ID does not conflict with existing ones
    name: "Shakuntala Devi",
    image: Shakuntala, // Local image or URL
    achievements:
      "Known as the 'Human Computer,' Shakuntala Devi was an Indian mathematician and author who demonstrated extraordinary calculation skills. She could perform complex arithmetic operations mentally, earning her a place in the Guinness World Records.",
    birthYear: 1929,
    deathYear: 2013,
    birthplace: "Bangalore, Karnataka, India",
    notableWorks: [
      "The World of Homosexuals",
      "Puzzles to Puzzle You",
      "Figuring: The Joy of Numbers",
    ],
    legacy:
      "Shakuntala Devi's exceptional mental math abilities inspired countless people to appreciate the beauty of mathematics. Her work as an author and her advocacy for human rights made her a multifaceted figure.",
    awards: [
      "Guinness World Record for Fastest Human Computation (1980)",
      "Honored by educational institutions globally for her contributions to mathematics.",
    ],
  },
  {
    id: 21,
    name: "Aryabhata",
    image: Aryabhata, // Local image or URL
    achievements:
      "Aryabhata was one of the greatest Indian mathematicians and astronomers of the classical age. He is known for introducing the concept of zero, calculating the value of pi, and formulating methods for solving quadratic equations.",
    birthYear: 476,
    deathYear: 550,
    birthplace: "Kusumapura (modern-day Patna), India",
    notableWorks: [
      "Aryabhatiya",
      "Trigonometric Functions",
      "Approximation of Pi",
    ],
    legacy:
      "Aryabhata's work influenced mathematics and astronomy in India and the Islamic world. His contributions to trigonometry, algebra, and astronomy remain highly significant.",
    awards: [],
  },
  {
    id: 22,
    name: "Bhāskara II (Bhaskaracharya)",
    image: Bhaskara, // Local image or URL
    achievements:
      "Bhāskara II was an Indian mathematician and astronomer who wrote extensively on algebra, calculus, and astronomy. He introduced concepts of differentiation and the idea of infinity.",
    birthYear: 1114,
    deathYear: 1185,
    birthplace: "Bijapur, Karnataka, India",
    notableWorks: ["Lilavati", "Bijaganita", "Siddhanta Shiromani"],
    legacy:
      "Bhāskara II's works were centuries ahead of their time and laid the groundwork for modern calculus and algebra. His treatise 'Lilavati' is considered a mathematical masterpiece.",
    awards: [],
  },
  {
    id: 23,
    name: "Brahmagupta",
    image: Brahmagupta, // Local image or URL
    achievements:
      "Brahmagupta was an Indian mathematician and astronomer who introduced the concept of zero as a number and provided rules for arithmetic operations with zero.",
    birthYear: 598,
    deathYear: 668,
    birthplace: "Bhinmal, Rajasthan, India",
    notableWorks: [
      "Brahmasphutasiddhanta",
      "Concept of Zero",
      "Cyclic Quadrilaterals",
    ],
    legacy:
      "Brahmagupta's introduction of zero as a number and his work on quadratic equations had a profound impact on mathematics in India and beyond.",
    awards: [],
  },
  {
    id: 24,
    name: "Mahāvīra",
    image: Mahavira, // Local image or URL
    achievements:
      "Mahāvīra was an Indian mathematician who contributed to algebra and introduced new methods for solving equations and calculating permutations and combinations.",
    birthYear: "9th century CE",
    deathYear: "Unknown",
    birthplace: "Karnataka, India",
    notableWorks: ["Ganita Sara Samgraha"],
    legacy:
      "Mahāvīra's contributions to algebra influenced mathematical developments in India and the Islamic world.",
    awards: [],
  },
  {
    id: 25,
    name: "Madhava of Sangamagrama",
    image: Madhava, // Local image or URL
    achievements:
      "Madhava was an Indian mathematician and astronomer who is considered the founder of the Kerala School of Mathematics. He made significant contributions to calculus and trigonometry.",
    birthYear: 1340,
    deathYear: 1425,
    birthplace: "Sangamagrama (modern-day Kerala), India",
    notableWorks: [
      "Madhava's Series for Pi",
      "Infinite Series",
      "Approximation of Sine and Cosine",
    ],
    legacy:
      "Madhava's pioneering work in calculus predated European developments by several centuries.",
    awards: [],
  },
  {
    id: 26,
    name: "Nilakantha Somayaji",
    image: Nilakantha, // Local image or URL
    achievements:
      "Nilakantha Somayaji was an Indian mathematician and astronomer who expanded on Madhava's work and made contributions to trigonometry and infinite series.",
    birthYear: 1444,
    deathYear: 1544,
    birthplace: "Kerala, India",
    notableWorks: ["Tantrasangraha"],
    legacy:
      "Nilakantha's work on planetary motion and trigonometric series significantly influenced Indian astronomy and mathematics.",
    awards: [],
  },
  {
    id: 27,
    name: "Varahamihira",
    image: Varahamihira, // Local image or URL
    achievements:
      "Varahamihira was an Indian mathematician and astronomer known for his work on trigonometry and algebra. He introduced many mathematical techniques and methods for solving equations.",
    birthYear: 505,
    deathYear: 587,
    birthplace: "Ujjain, India",
    notableWorks: ["Brihat Samhita", "Pancha Siddhantika"],
    legacy:
      "Varahamihira's contributions to trigonometry and astronomy were influential in Indian mathematics.",
    awards: [],
  },
  {
    id: 28,
    name: "Narayan Pandit",
    image: NarayanPandit, // Local image or URL
    achievements:
      "Narayan Pandit was an Indian mathematician known for his work on combinatorics and magic squares.",
    birthYear: 1340,
    deathYear: 1400,
    birthplace: "India",
    notableWorks: ["Ganita Kaumudi"],
    legacy:
      "Narayan Pandit's work on permutations, combinations, and magic squares contributed to Indian mathematics.",
    awards: [],
  },
  {
    id: 29,
    name: "Bhāskara I",
    image: BhaskaraI, // Local image or URL
    achievements:
      "Bhāskara I was an Indian mathematician who provided one of the earliest approximations of sine and contributed to trigonometry and astronomy.",
    birthYear: 600,
    deathYear: 680,
    birthplace: "India",
    notableWorks: ["Aryabhatiya Commentary"],
    legacy:
      "Bhāskara I's work laid the foundation for trigonometry in Indian mathematics.",
    awards: [],
  },
  {
    id: 30,
    name: "Manava",
    image: Manava, // Local image or URL
    achievements:
      "Manava was an ancient Indian mathematician known for his work on geometry and algebra, particularly for his contributions to solving linear equations.",
    birthYear: "750 BCE",
    deathYear: "Unknown",
    birthplace: "India",
    notableWorks: ["Sulba Sutras"],
    legacy:
      "Manava's Sulba Sutras laid the groundwork for geometry in Indian mathematics.",
    awards: [],
  },
  {
    id: 31,
    name: "Al-Khwarizmi",
    image: AlKhwarizmi, // Local image or URL
    achievements:
      "Al-Khwarizmi was a Persian mathematician and astronomer known as the 'father of algebra.' He introduced systematic solutions of linear and quadratic equations.",
    birthYear: 780,
    deathYear: 850,
    birthplace: "Khwarazm (modern-day Uzbekistan)",
    notableWorks: ["Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala"],
    legacy:
      "Al-Khwarizmi's work formed the foundation of algebra and introduced the term 'algorithm' to mathematics.",
    awards: [],
  },
  {
    id: 32,
    name: "Omar Khayyam",
    image: OmarKhayyam, // Local image or URL
    achievements:
      "Omar Khayyam was a Persian mathematician, astronomer, and poet who made significant contributions to algebra and the solution of cubic equations.",
    birthYear: 1048,
    deathYear: 1131,
    birthplace: "Nishapur, Persia",
    notableWorks: ["Treatise on Demonstration of Problems of Algebra"],
    legacy:
      "Khayyam's contributions to cubic equations and his calendar reform were ahead of their time.",
    awards: [],
  },
  {
    id: 33,
    name: "Al-Biruni",
    image: AlBiruni, // Local image or URL
    achievements:
      "Al-Biruni was a Persian mathematician and astronomer known for his accurate calculations of Earth's circumference and contributions to trigonometry.",
    birthYear: 973,
    deathYear: 1048,
    birthplace: "Kath, Khwarazm (modern-day Uzbekistan)",
    notableWorks: ["Al-Qanun al-Masudi"],
    legacy:
      "Al-Biruni's work influenced the development of astronomy, geography, and mathematics in the Islamic world and beyond.",
    awards: [],
  },
  {
    id: 34,
    name: "Ibn al-Haytham",
    image: IbnAlHaytham, // Local image or URL
    achievements:
      "Ibn al-Haytham, also known as Alhazen, was an Arab mathematician and physicist who made significant contributions to optics, geometry, and number theory.",
    birthYear: 965,
    deathYear: 1040,
    birthplace: "Basra, Iraq",
    notableWorks: ["Book of Optics", "Alhazen's Problem"],
    legacy:
      "Ibn al-Haytham's work in geometry and optics laid the foundation for modern science.",
    awards: [],
  },
  {
    id: 35,
    name: "Nasir al-Din al-Tusi",
    image: AlTusi, // Local image or URL
    achievements:
      "Al-Tusi was a Persian mathematician and astronomer who contributed to spherical trigonometry and laid the groundwork for Copernican heliocentrism.",
    birthYear: 1201,
    deathYear: 1274,
    birthplace: "Tus, Persia",
    notableWorks: ["Tahrir al-Majisti", "Treatise on Quadrants"],
    legacy:
      "Al-Tusi's contributions to trigonometry and astronomy had a lasting impact on both Islamic and European mathematics.",
    awards: [],
  },
  {
    id: 36,
    name: "Sharaf al-Din al-Tusi",
    image: SharafAlDin, // Local image or URL
    achievements:
      "Sharaf al-Din al-Tusi was a Persian mathematician known for his work on cubic equations and the development of calculus-like concepts.",
    birthYear: 1135,
    deathYear: 1213,
    birthplace: "Tus, Persia",
    notableWorks: ["Treatise on Equations"],
    legacy:
      "Sharaf al-Din's work on equations influenced later developments in algebra and calculus.",
    awards: [],
  },
  {
    id: 37,
    name: "Thabit ibn Qurra",
    image: ThabitIbnQurra, // Local image or URL
    achievements:
      "Thabit ibn Qurra was an Arab mathematician, physician, and translator who contributed to geometry, number theory, and astronomy.",
    birthYear: 826,
    deathYear: 901,
    birthplace: "Harran, Mesopotamia",
    notableWorks: ["Translation of Greek Mathematical Texts"],
    legacy:
      "Thabit's work on number theory and translations of Greek texts helped preserve and expand mathematical knowledge in the Islamic world.",
    awards: [],
  },
];

import web from "../assets/images/web-development.jpg";
import dsa from "../assets/images/dsa.jpg";
import dataScience from "../assets/images/data-science.jpg";
import java from "../assets/images/java.jpg";
import python from "../assets/images/python.jpg";
import react from "../assets/images/react.jpg";

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "Web Development",
    image: web,
    duration: "6 Months",
    rating: 4.9,
    students: "12K+",
    price: "₹24,999",

    mentor: "Rahul Verma",
    level: "Beginner to Advanced",
    language: "English",
    certificate: true,
    placement: true,

    syllabus: [
      "HTML5 & CSS3",
      "JavaScript ES6+",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Authentication",
      "REST APIs",
      "Major Industry Project",
    ],
  },

  {
    id: 2,
    title: "Data Structures & Algorithms",
    category: "DSA",
    image: dsa,
    duration: "4 Months",
    rating: 4.8,
    students: "15K+",
    price: "₹19,999",

    mentor: "Ankit Singh",
    level: "Intermediate",
    language: "English",
    certificate: true,
    placement: true,

    syllabus: [
      "Arrays",
      "Strings",
      "Linked List",
      "Stacks & Queues",
      "Trees",
      "Graphs",
      "Dynamic Programming",
      "Greedy Algorithms",
      "Mock Interviews",
    ],
  },

  {
    id: 3,
    title: "Data Science",
    category: "Data Science",
    image: dataScience,
    duration: "8 Months",
    rating: 4.7,
    students: "8K+",
    price: "₹29,999",

    mentor: "Priya Sharma",
    level: "Beginner",
    language: "English",
    certificate: true,
    placement: true,

    syllabus: [
      "Python",
      "NumPy",
      "Pandas",
      "Statistics",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Data Visualization",
      "Capstone Project",
    ],
  },

  {
    id: 4,
    title: "Java Programming",
    category: "Java",
    image: java,
    duration: "3 Months",
    rating: 4.8,
    students: "10K+",
    price: "₹14,999",

    mentor: "Amit Kumar",
    level: "Beginner",
    language: "English",
    certificate: true,
    placement: false,

    syllabus: [
      "Core Java",
      "OOP",
      "Collections",
      "Exception Handling",
      "Multithreading",
      "JDBC",
      "Mini Project",
    ],
  },

  {
    id: 5,
    title: "Python Programming",
    category: "Python",
    image: python,
    duration: "3 Months",
    rating: 4.9,
    students: "11K+",
    price: "₹12,999",

    mentor: "Neha Gupta",
    level: "Beginner",
    language: "English",
    certificate: true,
    placement: false,

    syllabus: [
      "Python Basics",
      "Functions",
      "Modules",
      "File Handling",
      "OOP",
      "APIs",
      "Mini Projects",
    ],
  },

  {
    id: 6,
    title: "React Development",
    category: "React",
    image: react,
    duration: "2 Months",
    rating: 4.9,
    students: "9K+",
    price: "₹11,999",

    mentor: "Sandeep Reddy",
    level: "Intermediate",
    language: "English",
    certificate: true,
    placement: true,

    syllabus: [
      "JSX",
      "Components",
      "Props",
      "State",
      "Hooks",
      "React Router",
      "Context API",
      "Projects",
    ],
  },
];

export default courses;
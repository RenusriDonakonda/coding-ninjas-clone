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
  },
];

export default courses;
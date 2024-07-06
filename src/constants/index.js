import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I am a Final Year student at Thapar Institute of Engineering and Technology pursuing Computer Engineering. I have a keen interest in Web Development and learning new technologies. I thrive in the dynamic dance of teamwork and self-drive, gracefully gliding through pressure and deadlines with ease.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - July 2024",
    role: "Frontend Developer",
    company: "Suvidha Foundation",
    description: `I enhanced the organization's website by redesigning its layout for better user experience and accessibility. Implementing responsive design ensured optimal viewing on all devices, while optimizing loading speeds improved performance.The revamped website now offers a seamless, user-friendly interface that effectively engages visitors and supports the organization's goals. `,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    year: "Jan 2024 - March 2024",
    role: "Executive Committee Member",
    company: "Urja TIET",
    description: `Enhanced team website for improved functionality and user experience as a key member of the executive committee in the technical department. Managed more than 200 students from different colleges within the hospitality department, delivering impactful results through collaborative efforts and showcasing adaptability in team environments`,
    technologies: ["React.js", "CSS", "JavaScript"],
  },
  {
    year: "Jun 2023 - July 2023",
    role: "NLP Project Intern",
    company: "Klassify Technology Pvt Ltd",
    description: `Applied AI and NLP techniques to categorize text data effectively with an average accuracy of 88 percent. Implemented algorithms for text analysis and classification. • Trained a model using ML/DL on a dataset of 100 to 200 text samples, showcasing proficiency in handling and preprocessing large datasets. Incorporated Tkinter GUI, enabling users to select and classify files with a user-friendly interface`,
    technologies: ["Python", "Natural Language Proceesing", "NLTK", "Tkinter"],
  },
];

export const PROJECTS = [
  {
    title: "StudyNotion",
    image: project1,
    description: "Developed a fully functional ed-tech platform using the MERN stack, enabling users to create, consume, and rate educational content. 50 plus API’s are designed following the REST architectural style with Node.js and Express.js. • Future Enhancements: Mobile app, Machine learning-powered recommendations, Creating personalized learning paths for each student based on their interests and learning style.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Express.js"],
  },
  {
    title: "Hospital Managemnt System",
    image: project2,
    description:"Implemented Role-Based Access Control (RBAC) for 3 user roles (administrators, doctors, patients), ensuring specific dashboard access permissions.Integrated a secure, real-time message board on the dashboard for seamless communication among administrators and patients. Developed an intuitive appointment booking system, allowing patients to schedule appointments with available doctors, reducing booking time by 50 precent.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Express.js"],
  },
  {
    title: "AI based text classification",
    image: project3,
    description: "This was the project made during my internship in Klassify Technology Pvt Ltd. The AI-based text classification project aims to develop a sophisticated machine learning model that can automatically classify text documents into predefined categories or topics. The project utilizes Natural Language Processing (NLP) techniques, specifically text classification algorithms, to enable efficient and accurate categorization of large volumes of unstructured text data.",
    technologies: ["Python", "Natural Language Proceesing", "NLTK", "Tkinter"],
  },
  {
    title: "Chatterlytics",
    image: project4,
    description:"Parsing raw chat files to extract messages, timestamps, and participant information.Statistical analysis for message frequency, average length, and participant activity. Sentiment analysis using natural language processing techniques.Visualizations including line charts, bar charts, and word clouds. User-friendly interface for easy file upload and customization.Customizable parameters for analysis settings.",
    technologies: ["Python", "Natural Language Proceesing", "Streamlit", "matplotlib","seaborn","pandas"],
  },
];

export const CONTACT = {
  address: "F8/11, Model Town ,New Delhi ",
  phoneNo: "+91 9871999932 ",
  email: "mananmehra330@gmail.com",
};

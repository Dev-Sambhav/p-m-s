import sam from "../assets/images/my_img1.png";
import sushant from "../assets/images/sushant.png"
import alok from "../assets/images/alok2.png"
import ritik from "../assets/images/ritik.png"

const userInfo = [
  {
    id: 1,
    name: "Sambhav Sharma",
    position: "UI & Frontend",
    photoURL: sam,
    leftLogo:true,
    description:
      "Hello, I'm Sambhav Sharma and I'm the UI developer as well as Frontend developer of this website. I use React js for Frontend. Being a React JS developer involves using the React JS library to develop and maintain web applications. My focus is on creating visually appealing and intuitive interfaces for websites.",
  },
  {
    id: 2,
    name: "Sushant Kumar",
    position: "Backend",
    photoURL: sushant,
    leftLogo:false,
    description:
      "Hello, I'm Sushant Kumar and I'm the Backend developer and I'm using Firebase for Database. My focus is ensure that the application operates smoothly and meets the needs of its users.",
  },
  {
    id: 3,
    name: "Alok Rana",
    position: "Documentation",
    photoURL: alok,
    leftLogo:true,
    description:
      "Hello, I'm Alok Rana and I'm a document writer and My role involves for creating and maintaining documentation for various products, services, or processes. This can include user manuals, technical guides, API documentation, and other materials that help users understand how to use and interact with a product or service.",
  },
  {
    id: 4,
    name: "Ritik Raj",
    position: "Testing",
    photoURL: ritik,
    leftLogo:false,
    description:
      "Hello, I'm Ritik Raj and Being a tester involves evaluating the quality and functionality of software applications, systems, or products before they are released to the public. Testers work to identify defects, errors, and other issues that could impact the user experience or the overall performance of the product.",
  },
];

export default userInfo;

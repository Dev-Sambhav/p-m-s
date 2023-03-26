import sam from "../assets/images/my_img1.png";
import sushant from "../assets/images/sushant.png"
import alok from "../assets/images/alok2.png"

const userInfo = [
  {
    id: 1,
    name: "Sambhav Sharma",
    position: "UI & Frontend",
    photoURL: sam,
    leftLogo:true,
    description:
      "Hii, I'm Sambhav Sharma and i am the UI developer as well as Frontend developer of this website. My focus is on creating visually appealing and intuitive interfaces for websites.",
  },
  {
    id: 2,
    name: "Sushant Kumar",
    position: "Backend",
    photoURL: sushant,
    leftLogo:false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat pulvinar elementum. Aenean efficitur nunc et augue finibus, fermentum lacinia ligula condimentum. Mauris eleifend bibendum.",
  },
  {
    id: 3,
    name: "Alok Rana",
    position: "Documentation",
    photoURL: alok,
    leftLogo:true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat pulvinar elementum. Aenean efficitur nunc et augue finibus, fermentum lacinia ligula condimentum. Mauris eleifend bibendum.",
  },
  {
    id: 4,
    name: "Ritik Raj",
    position: "Testing",
    photoURL: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hatColor=Gray02&hairColor=BlondeGolden&facialHairType=Blank&facialHairColor=Brown&clotheType=CollarSweater&clotheColor=Heather&eyeType=Happy&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Light',
    leftLogo:false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat pulvinar elementum. Aenean efficitur nunc et augue finibus, fermentum lacinia ligula condimentum. Mauris eleifend bibendum.",
  },
];

export default userInfo;

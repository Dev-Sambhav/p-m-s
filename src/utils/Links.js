import { MdSpaceDashboard } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";

const links = [
  {
    id: 1,
    text: "Projects",
    path: "/",
    icon: <MdSpaceDashboard />,
  },
  {
    id: 2,
    text: "Create",
    path: "/create",
    icon: <IoIosCreate />,
  },
  {
    id: 3,
    text: "Chatroom",
    path: "/chatroom",
    icon: <BsFillChatLeftQuoteFill />,
  },
  {
    id: 4,
    text: "Feedback",
    path: "/feedback",
    icon: <VscFeedback />,
  },
  {
    id: 5,
    text: "Profile",
    path: "/profile",
    icon: <CgProfile />,
  },
  {
    id: 6,
    text: "About",
    path: "/about",
    icon: <FcAbout />,
  },
];

export default links;

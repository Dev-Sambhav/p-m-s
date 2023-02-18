import {MdSpaceDashboard} from "react-icons/md"
import {IoIosCreate} from "react-icons/io"
import {BsFillChatLeftQuoteFill} from "react-icons/bs"
import {VscFeedback} from "react-icons/vsc"

const links = [
    {
        id:1,
        text:'Dashboard',
        path:'/dashboard',
        icon:<MdSpaceDashboard/>
    },
    {
        id:2,
        text:'Create',
        path:'/create',
        icon:<IoIosCreate/>
    },
    {
        id:3,
        text:'Chatroom',
        path:'/chatroom',
        icon:<BsFillChatLeftQuoteFill/>
    },
    {
        id:4,
        text:'Feedback',
        path:'/feedback',
        icon:<VscFeedback/>
    },
]

export default links;
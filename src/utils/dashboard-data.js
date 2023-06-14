import articleIcon from "../assets/images/articleIcon.png";
import articleIcon2 from "../assets/images/articleIcon2.png";
import articleIcon3 from "../assets/images/articleIcon3.png";
import articleIcon4 from "../assets/images/articleIcon4.png";
import chat from "../assets/images/chat.jpg";
import copy from "../assets/images/copy.jpg";

import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineFileWord, AiOutlineComment } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { FaSpellCheck } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { GiOpenBook } from "react-icons/gi";

export const app_content = [
  {
    id: 1,
    heading: "Article Outline",
    content:
      "Generate outline of article in seconds, using our powerful AI outline generator",
    icon: articleIcon2,
    url: "app/outline",
  },
  {
    id: 2,
    heading: "Grammar Check",
    content:
      "Perfect your English by reviewing your writing for grammar,spelling, and puctuation errors",
    icon: articleIcon3,
    url: "app/grammar",
  },
  {
    id: 3,
    heading: "Aricle Ideas",
    content:
      "Breakthrough writer's block, come up with awesome ideas for your articles",
    icon: articleIcon,
    url: "app/ideas",
  },
  {
    id: 4,
    heading: "Paragraph Rewrite",
    content:
      "Reword sentences, transform the structure of content whiles keeping the context",
    icon: articleIcon4,
    url: "app/rewrite",
  },
  {
    id: 5,
    heading: "Viral Posts",
    content:
      "Post everyday, attract unique views.Generate virals post for your social media handles",
    icon: chat,
    url: "app/socials",
  },
  {
    id: 6,
    heading: "Promo Copy",
    content: "Write quality promotional copy for your website and emails",
    icon: copy,
    url: "app/copy",
  },
];

export const menus = [
  { name: "Home", link: "/", icon: MdOutlineDashboard },

  { name: "Apps", link: "/", icon: FiMessageSquare, margin: true },
  {
    name: "Article Outline",
    link: "/",
    icon: AiOutlineFileWord,
  },
  { name: "Grammer Check", link: "/app/grammar", icon: FaSpellCheck },
  { name: "Phrase Rewrite", link: "/app/rewrite", icon: GiOpenBook },
  { name: "Article Ideas", link: "/app/ideas", icon: RiPagesLine },
  { name: "Promo Copy", link: "/app/copy", icon: RiPagesLine },
  { name: "Viral Posts", link: "/", icon: AiOutlineComment },
  { name: "Youtube Contents", link: "/", icon: AiOutlineComment },
  { name: "Contact", link: "/", icon: RiSettings4Line, margin: true },
];

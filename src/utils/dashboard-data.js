import checklist from "../assets/images/checklist.gif";
import pen from "../assets/images/fountain-pen.gif";
import notebook from "../assets/images/notebook.gif";
import feather from "../assets/images/feather-pen.gif";
import document from "../assets/images/document.gif";
import book from "../assets/images/book.gif";

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
    icon: checklist,
    url: "outline",
  },
  {
    id: 2,
    heading: "Transcribe",
    content:
      "Transcribe audio to text, check the text for grammar,spelling, and puctuation errors, and rephrase the text",
    icon: pen,
    url: "grammar",
  },
  {
    id: 3,
    heading: "Aricle Summarize",
    content: "Summarize article from any url ",
    icon: notebook,
    url: "ideas",
  },
  {
    id: 4,
    heading: "Paragraph Rewrite",
    content:
      "Reword sentences, transform the structure of content whiles keeping the context",
    icon: feather,
    url: "rewrite",
  },
  {
    id: 5,
    heading: "Viral Posts",
    content:
      "Post everyday, attract unique views.Generate virals post for your social media handles",
    icon: book,
    url: "socials",
  },
  {
    id: 6,
    heading: "Promo Copy",
    content: "Write quality promotional copy for your website and emails",
    icon: document,
    url: "/copy",
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

/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdOutlineHighQuality } from "react-icons/md";
import { BiTable } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import { FaUserClock } from "react-icons/fa";
import { TbDiscount } from "react-icons/tb";
import { FcFeedback } from "react-icons/fc";

import { MdDashboardCustomize } from "react-icons/md";

const Sidebar = ({ hamb, setHamb }) => {

  const navigate = useNavigate()

  const nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3" />,
      link: "/dashboard",
      name: "Dashboard",
    },
    {
      icon: <FcFeedback className="text-xl mr-3" />,
      link: "/feedback",
      name: "FeedBack",
    },
    {
      icon: <FaUserClock className="text-xl mr-3" />,
      link: "/userkundli",
      name: "User Kundli",
    },
    {
      icon: <TbDiscount className="text-xl mr-3" />,
      link: "/discount",
      name: "Discount",
    },
    {
      icon: <BsFillChatDotsFill className="text-xl mr-3" />,
      link: "/chat",
      name: "Chat",
    },
    {
      icon: <BiTable className="text-xl mr-3" />,
      link: "/horoscope",
      name: "Horoscope",
    },
    {
      icon: <MdOutlineHighQuality className="text-xl mr-3" />,
      link: "/specification",
      name: "Specification",
    },
    {
      icon: <BiLogOutCircle className="text-xl mr-3" />,
      link: "/",
      name: "Logout",
    },
  ];

  const logOut  = ()
  return (
    <>
      <aside className="p-4 bg-green-200">
        {/* Top */}
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>
        {/* Logo */}
        <figure className="flex  flex-col items-center">
          <span className="font-bold text-[rgb(241,146,46)] text-2xl">
            Astrologers Panel
            {/* <img src={image} className="h-24" /> */}
          </span>
        </figure>
        {/* Nav-menu */}
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link to={nav.link} key={nav.name} className="">
                <span className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm">
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
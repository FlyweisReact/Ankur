import { RiMenu4Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = ({ hamb, setHamb }) => {


  return (
    <>
    
    </>
  );
};

export default Navbar;



/*   */

<section
// className={
//   popup
//     ? "fixed top-0 left-0 wcomp bg-[rgb(0,0,0,0.5)] transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
//     : "hidden"
// }
// >
<div className="bg-slate-100 sm:h-[80vh] h-[10vh] overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg">
  {/* <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
    <span className=" font-semibold text-[rgb(241,146,46)] relative">
      Profile
    </span>
    <div className="text-[rgb(241,146,46)] py-0.5 text-2xl cursor-pointer font-medium tracking-wider">
      <IoMdClose
        onClick={() => {
          setPopup(false);
        }}
      />{" "}
    </div>
  </div> */}

  <form className="grid  grid-cols-1 gap-x-7 gap-y-4 p-4">
    {/* <div className="inline-flex  w-full flex-col">
      <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
        Name
      </label>
      <input
        required
        type="text"
        className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
      />
    </div> */}
    <div className="inline-flex  w-full flex-col">
      <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
        Phone
      </label>
      <input
        required
        type="tel"
        className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
      />
    </div>
    <div className="inline-flex  w-full flex-col">
      <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
        Password
      </label>
      <input
        required
        type="password"
        className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
      />
    </div>
    <div className="inline-flex  w-full flex-col">
      <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
        Image
      </label>
      <input
        required
        type="file"
        className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
      />
    </div>

    <button
      type="submit"
      value="Add"
      className="bg-[rgb(241,146,46)] cursor-pointer w-40 hover:bg-[rgb(241,146,46)] py-1 rounded-full"
    >
      Add{" "}
    </button>
  </form>
</div>
</section>
<div
className={
  hamb
    ? "flex  w-full justify-between  my-1 rounded-sm  p-4 py-3 shadow-md items-center  bg-slate-200 space-x-4"
    : "flex  w-full justify-between my-1 rounded-sm  p-4 py-3 shadow-md items-center  bg-slate-200 space-x-4"
}
>
<RiMenu4Line
  onClick={() => setHamb(!hamb)}
  className="text-2xl font-bold text-gray-900 hover:scale-90 cursor-pointer"
/>

{/* Profile */}
<section className="flex sm:ml-auto justify-end sm:w-full items-center space-x-2  pr-2">
  <figcaption className="tracking-wider pl-1 font-semibold">
    <div className="lg:text-base text-sm text-gray-900  uppercase">
      Welcome
    </div>
  </figcaption>
</section>

{/* Logout Btn */}
<CgProfile
  onClick={() => setPopup(!popup)}
  className="text-2xl sm:text-3xl font-bold text-[rgb(241,146,46)] cursor-pointer"
/>
</div>
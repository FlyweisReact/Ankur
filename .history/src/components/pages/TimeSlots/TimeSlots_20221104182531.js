/** @format */

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import HOC from "../../layout/HOC";
import {AiFillEdit , AiFillDelete} from 'react-icons/ai'

const TimeSlots = () => {
  const [popup, setPopup] = useState(false);
  const [time, setTIme] = useState("");

  console.log(time);
  return (
    <section>
      <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <span className="tracking-widest text-slate-900 font-semibold uppercase ">
          Time Slots
        </span>
        <button
          onClick={() => {
            setPopup(!popup);
          }}
          className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
        >
          Add Time Slot
        </button>
      </div>
      <section
        className={
          popup
            ? "fixed top-0 left-0 wcomp bg-[rgb(0,0,0,0.5)] transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
            : "hidden"
        }
      >
        <div className="bg-slate-100 overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg">
          <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
            <span className=" font-semibold text-[rgb(241,146,46)] ">
              Add Feedback
            </span>
            <div className="text-[rgb(241,146,46)] py-0.5 text-2xl cursor-pointer font-medium tracking-wider">
              <IoMdClose
                onClick={() => {
                  setPopup(false);
                }}
              />{" "}
            </div>
          </div>
          <form className="grid  grid-cols-1 gap-x-7 gap-y-4 p-4">
            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Select User
              </label>
              <input type={"time"} style={{ color: "black", padding: "5px" }}  onClick={(e) => setTIme(e.target.value)} />
            </div>
            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Select User
              </label>
              <select style={{ color: "black" }}>
                <option>Select the user</option>
              </select>
            </div>
            <div className="inline-flex  w-full flex-col">
              <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                Feedback
              </label>
              <textarea style={{ color: "black", padding: "5px" }} />
            </div>
            {/*  price */}

            <button
              type="submit"
              className="bg-[rgb(241,146,46)] flex items-center justify-center cursor-pointer w-40 hover:bg-[rgb(241,146,46)] py-1 rounded-full"
            >
              Add
            </button>
          </form>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------- */}
      <div className=" wcomp overflow-y-auto">
        <table className="table-auto  w-full text-left whitespace-no-wrap">
          <thead>
            <tr className=" border-b bg-green-300 shadow-xl text-gray-900">
              <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                Day
              </th>
              <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                TIme
              </th>
              <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                Action
              </th>
            </tr>
          </thead>

          <tbody style={{ color: "black" }}>
            <tr className="tracking-wider text-gray-900 mt-5">
              <td> 01/12/2002 </td>
              <td>  01 : 45 Am  </td>
              <td style={{display : 'flex' , gap : '30px'}}> 
              <AiFillEdit  color="blue"/>
              <AiFillDelete  color="red"/>
              
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* ----------------------------------------------------------------------------------- */}
    </section>
  );
};

export default HOC(TimeSlots);

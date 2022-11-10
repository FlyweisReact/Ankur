/** @format */

import React from "react";
import {} from 'react-icons/fa'

const Forgot = () => {
  return (
    <>
      <div className="w-full  h-screen flex flex-col justify-center ">
        <div className="w-96 bg-black dash-card mx-auto rounded-xl p-4">
          <div className="text-center flex justify-center m-6">Admin Panel</div>
          <hr className="pb-4" />
          {/* Username or EMail BOX */}
          <div className="text-black my-2 space-y-2 mb-4">
            <h2>Username or Email</h2>
            <div className="flex bg-gray-300 items-center py-1 px-2 rounded-md text-black">
              <FaUserCircle />
              <input
                placeholder="Enter Email"
                className="bg-transparent text-sm py-1 w-full outline-none pl-2"
                type="email"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center bg-black text-white py-1 rounded-xl">
              <button className="text-center w-full flex items-center justify-center">
                "Get Otp"
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;

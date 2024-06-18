import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

export const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className=" text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email ne for jobs
        </h3>
        <p className=" text-pretty/75 text-base mb-4">
          To be like this. for it is with pain. or else let them flee for the
          good of those foes.
        </p>
        <div className=" w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@gmail.com"
            className=" w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className=" w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      {/*2nd part */}
      <div>
        <h3 className=" text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get noticed faster
        </h3>
        <p className=" text-pretty/75 text-base mb-4">
          To be like this. for it is with pain. or else let them flee for the
          good of those foes.
        </p>
        <div className=" w-full space-y-4">
          <input
            type="submit"
            value={"Uploud your resume"}
            className=" w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

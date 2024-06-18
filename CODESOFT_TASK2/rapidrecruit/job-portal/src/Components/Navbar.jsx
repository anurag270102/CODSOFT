import { useState } from "react";
import { NavLink} from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuopen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuopen);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a job" },
  ];
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between item-center py-6">
        <a href="/" className="flex items-cent1er gap-2 text-2xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle
              cx="12.014"
              cy="12.514"
              r="12.014"
              fill="#323232"
              fillOpacity={"0.4"}
            />
            <circle cx="16.986" cy="17.486" r="12.014" fill="#f1f1f1" />
          </svg>
          <span>
            Rapid <span className=" text-blue">Recruit</span>
          </span>
        </a>

        {/*nav items */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary py-2">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* singup and login btn */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          {/* <button
            onClick={() => loginWithRedirect()}
            className="py-2 px-5 border rounded"
          >
            Log in
          </button> */}
          <SignedOut className="py-2 px-5 border rounded bg-blue text-white">
            <SignInButton className="py-2 px-5 border rounded bg-blue text-white" />
          </SignedOut>
          {/* <button
            onClick={() => loginWithRedirect()}
            className="py-2 px-5 border rounded bg-blue text-white"
          >
            sing up
          </button> */}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/*for mobile web site*/}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuopen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/*navitems for mobile */}
      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuopen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className="text-white py-1">
            {/* <button onClick={() => loginWithRedirect()} className="py-2">
              Log in
            </button> */}
            <SignedOut className="py-2 px-5 border rounded bg-blue text-white">
              <SignInButton className="py-2 px-5 border rounded bg-blue text-white" />
            </SignedOut>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

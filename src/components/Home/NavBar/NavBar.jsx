import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import md5 from "md5";
import { setUser } from "@/store/ClientSlice/ClientSlice";
import { logoutUser } from "@/store/thunks/logoutThunk";
import { getMenuLinks } from "@/constants";

export const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);

  const menuLinks = getMenuLinks(categories);
  debugger;
  const handleLogout = () => {
    dispatch(logoutUser());
    history.push("/");
  };

  const getGravatarUrl = (email) => {
    const hash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
  };
  return (
    <div>
      <div className="py-4">
        <div className="container mx-auto">
          {/* Flex container to align BrandName, Menu, and Icons in the same line */}
          <div className="flex items-center justify-between">
            {/* Brand Name (aligned to the left) */}
            <a
              className="text-primary tracking-widest font-semibold text-2xl"
              href=""
            >
              BRANDNAME
            </a>

            {/* Menu Links (centered between BrandName and Icons) */}
            <div className="hidden md:flex md:justify-center md:flex-grow">
              <ul className="flex items-center space-x-8">
                {menuLinks.map((data, index) => (
                  <li className="relative" key={index}>
                    {data.dropdown ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger className="text-secondary px-4 inline-block hover:text-black">
                          {data.name} <span>&#x25BE;</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                          <DropdownMenuLabel className="px-4 py-2 text-gray-900">
                            {data.name}
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          {data.dropdown[0].items.map((item) => (
                            <DropdownMenuItem
                              key={item.id}
                              className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              <a href={item.link}>{item.name}</a>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <a
                        className="text-secondary px-4 inline-block hover:text-black"
                        href={data.link}
                      >
                        {data.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Icons Section (aligned to the right) */}
            <div className="flex items-center space-x-4">
              {/* Login / Register (hidden on mobile, shown on desktop) */}
              <div className="hidden md:flex items-center space-x-2">
                {user ? (
                  <>
                    <img
                      src={getGravatarUrl(user.email)}
                      alt="User Avatar"
                      className="rounded-full w-10 h-10"
                    />
                    <span className="text-tertiary font-semibold">
                      {user.name}
                    </span>
                    <a
                      className="text-tertiary font-semibold"
                      onClick={handleLogout}
                      href="/"
                    >
                      Logout
                    </a>
                  </>
                ) : (
                  <>
                    {" "}
                    <FontAwesomeIcon icon={faUser} color="#23A6F0" />
                    <a className="text-tertiary" href="/login">
                      Login
                    </a>
                    <span className="text-tertiary">/</span>
                    <a className="text-tertiary" href="/signup">
                      Register
                    </a>
                  </>
                )}
              </div>

              {/* Icons Section */}
              <a className="text-tertiary" href="">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </a>
              <a className="text-tertiary" href="">
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
              <a className="text-tertiary hidden md:inline-block" href="">
                <FontAwesomeIcon icon={faHeart} />
              </a>
              {/* Hamburger Menu (shown only on mobile) */}
              <a className="md:hidden text-tertiary" href="">
                <FontAwesomeIcon icon={faBars} />
              </a>
            </div>
          </div>

          {/* Mobile Menu (shown only on mobile) */}
          <div className="md:hidden mt-4">
            <ul className="flex flex-col items-center space-y-4 text-center w-full">
              {menuLinks.map((data, index) => (
                <li key={index}>
                  <a
                    className="text-secondary px-4 inline-block hover:text-black"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

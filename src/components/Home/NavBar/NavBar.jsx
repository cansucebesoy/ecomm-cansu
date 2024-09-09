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

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop",
    dropdown: [
      { id: 1, name: "Man", link: "/shop" },
      { id: 2, name: "Woman", link: "/shop" },
    ],
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Team",
    link: "/team",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];

export const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <div className="md:flex md:justify-center md:flex-grow hidden">
              <ul className="flex items-center space-x-8">
                {MenuLinks.map((data, index) => (
                  <li
                    className="relative"
                    key={index}
                    onMouseEnter={data.name === "Shop" ? toggleDropdown : null}
                    onMouseLeave={data.name === "Shop" ? toggleDropdown : null}
                  >
                    <a
                      className="text-secondary px-4 inline-block hover:text-black"
                      href={data.link}
                    >
                      {data.name}
                      {data.name === "Shop" && <span>&#x25BE;</span>}
                    </a>
                    {data.name === "Shop" && isDropdownOpen && (
                      <ul className="absolute">
                        {data.dropdown.map((item) => (
                          <li key={item.id}>
                            <a href={item.link}>{item.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Icons Section (aligned to the right) */}
            <div className="flex items-center space-x-4">
              {/* Login / Register (hidden on mobile, shown on desktop) */}
              <div className="hidden md:flex items-center space-x-2">
                <FontAwesomeIcon icon={faUser} color="#23A6F0" />
                <a className="text-tertiary" href="/login">
                  Login
                </a>
                <span className="text-tertiary">/</span>
                <a className="text-tertiary" href="/signup">
                  Register
                </a>
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
              {MenuLinks.map((data, index) => (
                <li
                  key={index}
                  onMouseEnter={data.name === "Shop" ? toggleDropdown : null}
                  onMouseLeave={data.name === "Shop" ? toggleDropdown : null}
                >
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

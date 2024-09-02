import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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

  const history = useHistory();

  const handleClick = () => {
    history.push("/shop");
  };

  return (
    <div>
      <div className="py-4">
        <div className="container ">
          <div className=" block items-center lg:flex lg:justify-between lg:gap-4">
            <a
              className="text-primary tracking-widest font-semibold text-2xl"
              href=""
            >
              BRANDNAME
            </a>
            <div>
              <ul className="block text-center  text-xl lg:flex lg:items-center mt-8 lg:mt-0 space-y-4 lg:space-y-0 lg:gap-4">
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

            <div className="flex space-x-8 inline-block items-center ">
              <div className="space-x-1 hidden lg:inline-block">
                <FontAwesomeIcon icon={faUser} color="#23A6F0" />
                <a className="text-tertiary" href="">
                  Login
                </a>
                <span className="text-tertiary">/</span>
                <a className="text-tertiary" href="">
                  Register
                </a>
              </div>
              <div className="space-x-4 lg:flex ">
                <a className="text-tertiary" href="">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
                <a className="text-tertiary" href="">
                  <FontAwesomeIcon icon={faCartShopping} />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="hidden lg:inline-block text-tertiary"
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faBars} className="lg:hidden" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

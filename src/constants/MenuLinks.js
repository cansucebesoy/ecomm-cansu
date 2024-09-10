import { GENDERS } from "./";

const getShopDropdownItemsByGender = (categories, gender) => {
  return categories
    .filter((category) => category.gender === gender)
    .map((category) => ({
      id: category.id,
      name: category.title,
      link: `/shop/${GENDERS[gender]}/${category.code.split(":")[1]}`,
    }));
};

export const getMenuLinks = (categories) => {
  return [
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
        {
          id: 1,
          name: "Woman",
          link: "/shop/kadın",
          items: getShopDropdownItemsByGender(categories, "k"),
        },
        {
          id: 2,
          name: "Man",
          link: "/shop/erkek",
          items: getShopDropdownItemsByGender(categories, "e"),
        },
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
};

import { fetchCategories } from "@/store/thunks/categoriesThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const ShopHero = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const fetchState = useSelector((state) => state.product.fetchState);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const handleCategoryClick = (gender, category) => {
    history.push(`/shop/${gender}/${category}`);
  };
  return (
    <div className="bg-[#FAFAFA]">
      <div className="container pb-12 flex flex-col md:flex-row justify-center md:justify-between gap-4">
        {fetchState === "FETCHED" &&
          topCategories.map((category) => (
            <div
              key={category.id}
              className="w-full md:w-1/5 cursor-pointer"
              onClick={() =>
                handleCategoryClick(
                  category.gender,
                  category.code.split(":")[1]
                )
              }
            >
              <img
                className="w-full h-full object-cover rounded"
                src={category.img} // Use the image URL from the 'img' field
                alt={category.title}
              />
              <div className="text-center  font-semibold">{category.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

// const images = [
//   {
//     url: "/shop-hero-1.jpg",
//   },
//   {
//     url: "/shop-hero-2.jpg",
//   },
//   {
//     url: "/shop-hero-3.jpg",
//   },
//   {
//     url: "/shop-hero-4.jpg",
//   },
//   {
//     url: "/shop-hero-5.jpg",
//   },
// ];

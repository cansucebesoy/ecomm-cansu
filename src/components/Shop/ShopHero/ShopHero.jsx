import { Skeleton } from "@/components/ui/skeleton";
import { GENDERS } from "@/constants";
import { setFetchState } from "@/store/ProductSlice/ProductSlice";
import { fetchCategories } from "@/store/thunks/categoriesThunk";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const ShopHero = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const fetchState = useSelector((state) => state.product.fetchState);
  const [localFetchState, setLocalFetchState] = useState();

  useEffect(() => {
    if (fetchState === "FETCHED") {
      setTimeout(() => setLocalFetchState(fetchState), 2000);
    }
  }, [fetchState]);

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const handleCategoryClick = (gender, category) => {
    history.push(`/shop/${GENDERS[gender]}/${category}`);
  };
  return (
    <div className="bg-[#FAFAFA]">
      <div className="container pb-12 flex flex-col md:flex-row justify-center md:justify-between gap-4">
        {localFetchState === "FETCHED"
          ? topCategories.map((category) => (
              <div
                key={category.id}
                className="w-full md:w-1/5 cursor-pointer relative"
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
                <div className="text-center font-semibold absolute inset-0  flex justify-center items-center bg-black bg-opacity-30 text-white">{`${GENDERS[
                  category.gender
                ].toUpperCase()} ${category.title.toUpperCase()}`}</div>
              </div>
            ))
          : [1, 2, 3, 4, 5].map((value) => (
              <Skeleton
                key={`${value}-skeleton`}
                className="w-full md:w-1/5 h-[350px] rounded"
              />
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

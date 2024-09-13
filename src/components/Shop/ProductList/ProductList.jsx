import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";
import { fetchProducts } from "@/store/thunks/productsThunk";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const sortProducts = (products, sort) => {
  if (sort === "price:asc") {
    return [...products].sort((a, b) => a.price - b.price);
  }
  if (sort === "price:desc") {
    return [...products].sort((a, b) => b.price - a.price);
  }
  if (sort === "rating:asc") {
    return [...products].sort((a, b) => a.rating - b.rating);
  }
  if (sort === "rating:desc") {
    return [...products].sort((a, b) => b.rating - a.rating);
  }
  return products;
};

const filterProducts = (products, filter) => {
  if (!filter) return products;

  return products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ProductList = ({ sort, filter }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const productList = useSelector((state) => state.product.productList);

  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(fetchProducts(categoryId, sort, filter));
  }, [categoryId, sort, filter, dispatch]);

  // const sortedProductList = sortProducts(productList, sort);
  const filteredProductList = filterProducts(productList, filter);
  const sortedProductList = sortProducts(filteredProductList, sort);

  const handleCardClick = (index) => {
    history.push(`/products/${index}`);
  };

  return (
    <div className="container cursor-pointer mx-auto w-full md:w-3/4 gap-8 flex flex-col items-center justify-center md:justify-between md:flex-row flex-wrap">
      {sortedProductList.map((card, index) => (
        <div
          key={index}
          className="shadow border-none md:w-1/5 max-w-[239px] mb-4 md:mb-0"
        >
          <div className=" relative w-full h-auto rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={card.images[0].url}
              onClick={() => handleCardClick(index)}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{card.name}</h3>
            <p className="text-gray-600 mb-2">{card.description}</p>
            <div className="flex items-center mb-2">
              {/* <span className="text-gray-400 line-through mr-2">
                {card.price}
              </span> */}
              <span className="font-semibold">{`$${card.price}`}</span>
            </div>
            <img className="w-1/2" src="/product-colors.svg" alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

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

export const ProductList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const productList = useSelector((state) => state.product.productList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCardClick = (index) => {
    history.push(`/product/${index}`);
  };

  return (
    <div className="container mx-auto w-full md:w-3/4 gap-8 flex flex-col items-center justify-center md:justify-between md:flex-row flex-wrap">
      {productList.map((card, index) => (
        <div
          key={index}
          className="border-none md:w-1/5 max-w-[239px] mb-4 md:mb-0"
        >
          <div className="relative w-full h-auto rounded-md overflow-hidden">
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
            <img className="w-1/2" src="./product-colors.svg" alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

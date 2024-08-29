import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useHistory } from "react-router-dom";

import { productInfo } from "@/constants/ProductInfo";

export const ProductList = () => {
  const history = useHistory();

  const handleCardClick = (index) => {
    history.push(`/product/${index}`);
  };

  return (
    <div className="container mx-auto w-full md:w-3/4 gap-8 flex flex-col items-center justify-center md:justify-between md:flex-row flex-wrap">
      {productInfo.map((card, index) => (
        <div
          key={index}
          className="border-none md:w-1/5 max-w-[239px] mb-4 md:mb-0"
        >
          <div className="relative w-full h-auto rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={card.imageLink}
              onClick={() => handleCardClick(index)}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{card.footerTitle}</h3>
            <p className="text-gray-600 mb-2">{card.footerDescription}</p>
            <div className="flex items-center mb-2">
              <span className="text-gray-400 line-through mr-2">
                {card.originalPrice}
              </span>
              <span className="font-semibold">{card.discountedPrice}</span>
            </div>
            <img className="w-1/2" src={card.footerImg} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

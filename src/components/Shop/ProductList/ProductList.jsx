import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useHistory } from "react-router-dom";
import { Button } from "@/components/ui/button";

const cardInfo = [
  {
    imageLink: "./product-list-1.jpg",
    footerTitle: "Graphic Design",
    footerDescription: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    footerImg: "./product-colors.svg",
  },
  {
    imageLink: "./product-list-1.jpg",
    footerTitle: "Graphic Design",
    footerDescription: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    footerImg: "./product-colors.svg",
  },
  {
    imageLink: "./product-list-1.jpg",
    footerTitle: "Graphic Design",
    footerDescription: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    footerImg: "./product-colors.svg",
  },
  {
    imageLink: "./product-list-1.jpg",
    footerTitle: "Graphic Design",
    footerDescription: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    footerImg: "./product-colors.svg",
  },
  {
    imageLink: "./product-list-1.jpg",
    footerTitle: "Graphic Design",
    footerDescription: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    footerImg: "./product-colors.svg",
  },
  {
    imageLink: "./product-list-1.jpg",
    footerTitle: "Graphic Design",
    footerDescription: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    footerImg: "./product-colors.svg",
  },
  {
    imageLink: "./product-list-1.jpg",
    footerTitle: "Graphic Design",
    footerDescription: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    footerImg: "./product-colors.svg",
  },
  {
    imageLink: "./product-list-1.jpg",
    footerTitle: "Graphic Design",
    footerDescription: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    footerImg: "./product-colors.svg",
  },
];

export const ProductList = () => {
  const history = useHistory();

  const handleCardClick = (index) => {
    history.push(`/product/${index}`);
  };

  return (
    <div>
      <div className="container w-full md:w-3/4 gap-8 flex flex-col items-center justify-center md:justify-between md:flex-row flex-wrap">
        {cardInfo.map((card, index) => (
          <Card key={index} className="border-none md:w-1/4 max-w-[239px] ">
            <CardContent className="flex justify-center w-full">
              <img
                className="w-full max-h-[427px] w-1/4 "
                src={card.imageLink}
                onClick={() => handleCardClick(index)}
              />
            </CardContent>
            <div className="flex justify-center ">
              <CardFooter>
                <div className="flex flex-col items-center">
                  <p>{card.footerTitle}</p>
                  <p>{card.footerDescription}</p>
                  <p>
                    <span>{card.originalPrice}</span> {card.discountedPrice}
                  </p>
                  <img src={card.footerImg} alt="" />
                </div>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

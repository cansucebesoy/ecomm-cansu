import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { productInfo } from "@/constants";

export const ProductCardList = () => {
  return (
    <div className="container w-full flex flex-col justify-center items-center md:justify-between md:flex-row flex-wrap gap-4">
      {productInfo.map((card, index) => (
        <Card key={index} className="border-none w-full max-w-[239px] md:w-1/4">
          <CardContent className="flex justify-center w-full">
            <img className="w-full max-h-[427px]" src={card.imageLink} />
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
  );
};

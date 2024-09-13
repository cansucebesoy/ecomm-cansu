import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { productInfo } from "@/constants";
import { fetchProducts } from "@/store/thunks/productsThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ProductCardList = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container w-full flex flex-col justify-center items-center md:justify-between md:flex-row flex-wrap gap-4">
      {productList.map((card, index) => (
        <Card key={index} className="border-none w-full max-w-[239px] md:w-1/4">
          <CardContent className="flex justify-center w-full">
            <img className="w-full max-h-[427px]" src={card.images[0].url} />
          </CardContent>
          <div className="flex justify-center ">
            <CardFooter>
              <div className="flex flex-col items-center">
                <p>{card.name}</p>
                <p>{card.description}</p>
                <p>
                  <span>{card.price}</span> {card.discountedPrice}
                </p>
                <img src="./product-colors.svg" alt="" />
              </div>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
};

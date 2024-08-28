import { useParams } from "react-router-dom";
import { productInfo } from "@/constants/ProductInfo";

export const ProductDetail = () => {
  const { productId } = useParams();

  return <div className="container mx-auto p-4">hahahaahah{productId}</div>;
};

import { useParams } from "react-router-dom";
import { productInfo } from "@/constants";
import { BreadcrumbComponent } from "@/components/Shop/Breadcrumb/BreadcrumbComponent";
import { ProductCardList } from "@/components/Home/ProductCardList/ProductCardList";
import { Bestsellers } from "@/components/Home/Bestsellers/Bestsellers";
import { AdditionalInfo } from "@/components/Shop/AdditionalInfo/AdditionalInfo";
import { AdditionalText } from "@/components/Shop/AdditionalText/AdditionalText";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
export const ProductDetail = () => {
  const { productId } = useParams();

  const product = productInfo[parseInt(productId, 10)];

  if (!product) {
    return <div className="container mx-auto p-4">Product not found</div>;
  }

  return (
    <>
      <BreadcrumbComponent />
      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={product.imageLink}
            alt={product.footerTitle}
            className="w-2/4 h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4">{product.footerTitle}</h1>
          <div className="text-xl font-semibold text-gray-800 mb-4">
            {product.originalPrice}
          </div>
          <div className="text-green-600 font-semibold mb-4">In Stock</div>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            laudantium omnis quos labore. Velit maiores nemo ipsam maxime
            debitis facere distinctio fugiat dolores! Iusto blanditiis
            laudantium natus animi harum et.
          </p>
          <div className="flex gap-2 mb-6">
            <div className="h-6 w-6 bg-orange-400 rounded-full"></div>
            <div className="h-6 w-6 bg-green-400 rounded-full"></div>
            <div className="h-6 w-6 bg-blue-400 rounded-full"></div>
            <div className="h-6 w-6 bg-gray-500 rounded-full"></div>
          </div>
          <div className="flex gap-4">
            <Button className="w-1/3">Select Options</Button>
            <div className="space-x-4 flex items-center ">
              <a className="text-tertiary" href="">
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
              <a className="text-tertiary" href="">
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a className="text-tertiary" href="">
                <FontAwesomeIcon icon={faEye} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <AdditionalInfo />
      <AdditionalText />
      <Bestsellers />
      <ProductCardList />
    </>
  );
};

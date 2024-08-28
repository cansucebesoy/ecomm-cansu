import { useParams } from "react-router-dom";

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

export const ProductDetail = () => {
  const { productId } = useParams();

  return <div className="container mx-auto p-4">hahahaahah{productId}</div>;
};

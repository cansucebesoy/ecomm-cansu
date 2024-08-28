import { Clients } from "@/components/Commons/Clients";
import { EditorsPick } from "@/components/Home/EditorsPick/EditorsPick";
import { ProductCardList } from "@/components/Home/ProductCardList/ProductCardList";
import { Hero } from "@/components/Home/Hero/Hero";
import { Bestsellers } from "@/components/Home/Bestsellers/Bestsellers";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <EditorsPick />
      <Bestsellers />
      <ProductCardList />
      <Clients />
    </div>
  );
};

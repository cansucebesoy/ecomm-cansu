import { Clients } from "@/components/Clients/Clients";
import { EditorsPick } from "@/components/ProductCard/EditorsPick";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { Footer } from "@/layout/Footer";
import { Header } from "@/layout/Header";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Clients />
      <EditorsPick />
      <ProductCard />
      <Footer />
    </div>
  );
};

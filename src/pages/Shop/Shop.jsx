import { Clients } from "@/components/Commons/Clients";

import { BreadcrumbComponent } from "@/components/Shop/Breadcrumb/BreadcrumbComponent";
import { ProductList } from "@/components/Shop/ProductList/ProductList";

import { ShopHero } from "@/components/Shop/ShopHero/ShopHero";

export const Shop = () => {
  return (
    <div>
      <BreadcrumbComponent />
      <ShopHero />
      <ProductList />
      <Clients />
    </div>
  );
};

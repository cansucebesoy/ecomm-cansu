import { Clients } from "@/components/Commons/Clients";

import { BreadcrumbComponent } from "@/components/Shop/Breadcrumb/BreadcrumbComponent";
import { CardsPagination } from "@/components/Shop/Pagination/CardsPagination";

import { Popularity } from "@/components/Shop/Popularity/Popularity";
import { ProductList } from "@/components/Shop/ProductList/ProductList";
import { ProductNumber } from "@/components/Shop/ProductNumber/ProductNumber";
import { Search } from "@/components/Shop/Search/Search";

import { ShopHero } from "@/components/Shop/ShopHero/ShopHero";
import { Views } from "@/components/Shop/Views/Views";

export const Shop = () => {
  return (
    <div>
      <BreadcrumbComponent />
      <ShopHero />
      <div className="container py-8 flex flex-col justify-center md:flex-row md:justify-between">
        <ProductNumber />
        <Views />
        <div className="flex justify-center">
          <Popularity />
          <Search />
        </div>
      </div>
      <ProductList />
      <CardsPagination />
      <Clients />
    </div>
  );
};

import { Clients } from "@/components/Commons/Clients";

import { BreadcrumbComponent } from "@/components/Shop/Breadcrumb/BreadcrumbComponent";
import { CardsPagination } from "@/components/Shop/Pagination/CardsPagination";

import { Popularity } from "@/components/Shop/Popularity/Popularity";
import { ProductList } from "@/components/Shop/ProductList/ProductList";
import { ProductNumber } from "@/components/Shop/ProductNumber/ProductNumber";
import { Search } from "@/components/Shop/Search/Search";

import { ShopHero } from "@/components/Shop/ShopHero/ShopHero";
import { Views } from "@/components/Shop/Views/Views";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

export const Shop = () => {
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const sort = searchParams.get("sort");
  const filter = searchParams.get("filter");

  const handleSort = (newSort) => {
    searchParams.set("sort", newSort);
    history.push(`products?${searchParams.toString()}`);
  };

  const handleFilter = (newFilter) => {
    searchParams.set("filter", newFilter);
    history.push(`products?${searchParams.toString()}`);
  };

  return (
    <div>
      <BreadcrumbComponent />
      <ShopHero />
      <div className="container py-8 flex flex-col justify-center md:flex-row md:justify-between gap-8">
        <ProductNumber />
        <Views />
        <div className="flex justify-center">
          <Popularity onSortChange={handleSort} />
          <Search onSearch={handleFilter} />
        </div>
      </div>
      <ProductList sort={sort} filter={filter} />
      <CardsPagination />
      <Clients />
    </div>
  );
};

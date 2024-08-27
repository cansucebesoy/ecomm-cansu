import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const BreadcrumbComponent = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className=" container flex justify-center p-10 ">
        <div className="w-full md:justify-between flex flex-col items-center gap-4 md:flex-row">
          <div className="w-full">
            <p>Shop</p>
          </div>
          <Breadcrumb className="w-full flex justify-end">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

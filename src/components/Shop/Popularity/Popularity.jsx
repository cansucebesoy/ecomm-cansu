import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export const Popularity = () => {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger>Default &#x25BE;</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Default</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Price Ascending</DropdownMenuItem>
          <DropdownMenuItem>Price Descending</DropdownMenuItem>
          <DropdownMenuItem>Rating Ascending</DropdownMenuItem>
          <DropdownMenuItem>Rating Descending</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

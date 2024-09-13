import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const sortOptions = [
  { label: "Price Ascending", value: "price:asc" },
  { label: "Price Descending", value: "price:desc" },
  { label: "Rating Ascending", value: "rating:asc" },
  { label: "Rating Descending", value: "rating:desc" },
];

export const Popularity = ({ onSortChange }) => {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger>Default &#x25BE;</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Default</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {sortOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onSortChange(option.value)}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

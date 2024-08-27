import { Button } from "@/components/ui/button";

export const Search = () => {
  return (
    <div className="flex items-center justify-evenly">
      <input
        type="text"
        className="w-3/5 h-10 border border-gray-300 rounded"
      />
      <Button>Search</Button>
    </div>
  );
};

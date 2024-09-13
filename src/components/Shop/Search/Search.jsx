import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex items-center justify-evenly">
      <input
        value={input}
        onChange={handleInputChange}
        type="text"
        className="w-3/5 h-10 border border-gray-300 rounded"
      />
      <Button onClick={() => onSearch(input)}>Search</Button>
    </div>
  );
};

import { Button } from "@/components/ui/button";

export const AdditionalInfo = () => {
  return (
    <div className="flex items-center justify-center gap-8 py-2 px-4">
      <div className="flex items-center space-x-2">
        <Button className="bg-white " variant="ghost">
          Description
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Button className="bg-white " variant="ghost">
          Additional Information
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Button className="bg-white " variant="ghost">
          Reviews (0)
        </Button>
      </div>
    </div>
  );
};

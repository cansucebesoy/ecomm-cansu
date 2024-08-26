import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const EditorsPick = () => {
  return (
    <div>
      <Card>
        <CardHeader className="items-center">
          <CardTitle>EDITOR'S PICK</CardTitle>
          <CardDescription>
            Problems trying to resolve the conflict between
          </CardDescription>
        </CardHeader>
        <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row">
          <CardContent className="max-w-xs h-auto md:max-w-none lg:max-w-none">
            <img
              src="./editorspick-1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </CardContent>
          <CardContent className="w-full md:w-auto max-w-xs">
            <img src="./editorspick-2.jpg" alt="" className="w-full" />
          </CardContent>
          <div>
            <CardContent className="w-full md:w-auto max-w-xs">
              <img src="./editorspick-3.jpg" alt="" className="w-full" />
            </CardContent>
            <CardContent className="w-full md:w-auto max-w-xs">
              <img src="./editorspick-4.jpg" alt="" className="w-full" />
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

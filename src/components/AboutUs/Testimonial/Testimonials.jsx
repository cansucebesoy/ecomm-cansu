import { Button } from "@/components/ui/button";
export const Testimonial = () => {
  return (
    <div className="bg-blue-500 flex flex-col md:flex-row gap-8 items-center justify-between">
      <div className="md:w-1/2 flex flex-col gap-4  px-36">
        <h2 className="text-white text-lg font-bold">WORK WITH US</h2>
        <h1 className="text-white text-5xl font-bold">Now Let's grow Yours</h1>
        <p className="text-white text-lg ">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </p>
        <Button
          className="bg-blue-500 text-white w-1/5 rounded"
          variant="outline"
        >
          Button
        </Button>
      </div>
      <div className="w-2/5">
        <img
          className="w-full h-auto "
          src="/about-girl.jpg"
          alt="Testimonial"
        />
      </div>
    </div>
  );
};

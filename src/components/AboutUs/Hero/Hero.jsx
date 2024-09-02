export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-24 ">
      <div className="container justify-center flex flex-col md:flex-row">
        <div className="flex flex-col items-center md:items-start justify-center gap-4 md:w-1/2">
          <p className="font-bold ">ABOUT COMPANY </p>
          <h1 className="text-4xl font-bold text-gray-800 md:text-6xl">
            ABOUT US
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            We know how large objects will act, but things on a small scale
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Quote Now
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-10 md:flex-row md:gap-8 md:w-1/2">
          <img src="/none1.jpg" alt="Hero Image" className="w-full md:w-1/2" />
        </div>
      </div>
    </div>
  );
};

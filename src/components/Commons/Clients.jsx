import {
  FaHooli,
  FaLyft,
  FaPiedPiperHat,
  FaStripe,
  FaAws,
  FaRedditAlien,
} from "react-icons/fa";

export const Clients = () => {
  return (
    <div className="w-full container py-12">
      <div className="flex flex-col justify-between text-8xl text-secondary items-center md:flex-row lg:flex-row">
        <FaHooli />
        <FaLyft />
        <FaPiedPiperHat />
        <FaStripe />
        <FaAws />
        <FaRedditAlien />
      </div>
    </div>
  );
};

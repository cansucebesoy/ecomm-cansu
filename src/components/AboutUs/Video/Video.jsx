import { useState } from "react";
export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="container mx-auto px-36 py-12">
      <div
        className="relative overflow-hidden rounded-lg shadow-lg"
        style={{ paddingTop: "56.25%" }}
      >
        {!isPlaying ? (
          <div
            className="absolute top-0 left-0 w-full h-full cursor-pointer"
            onClick={handlePlay}
          >
            <img
              src="/cover.jpg"
              alt="Video cover"
              className="object-cover w-full h-full rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-blue-500 text-white rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-5.197-3.06A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.06a1 1 0 000-1.664z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/u_qFlTu7HTw?autoplay=1&si=8eFreSesRq3Bfamq"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export const ShopHero = () => {
  const images = [
    {
      url: "/shop-hero-1.jpg",
    },
    {
      url: "/shop-hero-2.jpg",
    },
    {
      url: "/shop-hero-3.jpg",
    },
    {
      url: "/shop-hero-4.jpg",
    },
    {
      url: "/shop-hero-5.jpg",
    },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      <div className="w-full md:w-3/4 container pb-12 flex flex-col justify-center md:justify-between md:flex-row items-center py-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="w-full w-1/5">
            <img className="w-full" src={img.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

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
      <div className="container pb-12 flex flex-col md:flex-row justify-center md:justify-between gap-4">
        {images.map((img, index) => (
          <div key={index} className="w-full md:w-1/5">
            <img className="w-full h-full object-cover" src={img.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

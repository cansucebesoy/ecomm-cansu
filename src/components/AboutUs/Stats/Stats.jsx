export const Stats = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-evenly">
        <div className="text-center">
          <h2 className="text-7xl font-bold text-gray-800">15K</h2>
          <p className="text-gray-600 text-md font-bold mt-2">
            Happy Customers
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-7xl font-bold text-gray-800">150K</h2>
          <p className="text-gray-600 text-md font-bold mt-2">
            Monthly Visitors
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-7xl font-bold text-gray-800">15</h2>
          <p className="text-gray-600 text-md font-bold  mt-2">
            Countries Worldwide
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-7xl font-bold text-gray-800">100+</h2>
          <p className="text-gray-600 text-md font-bold  mt-2">Top Partners</p>
        </div>
      </div>
    </div>
  );
};

import React from "react";

const CategoryNewsSide = () => {
  // Fake API data for categories
  const fakeCategories = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Health" },
    { id: 3, name: "Finance" },
    { id: 4, name: "Travel" },
    { id: 5, name: "Education" },
    { id: 6, name: "Entertainment" },
    { id: 7, name: "Sports" },
    { id: 8, name: "Food" },
    { id: 9, name: "Lifestyle" },
    { id: 10, name: "Science" },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      {/* Section Title */}
      <h2 className="text-xl font-bold mb-4">Categories</h2>

      {/* Divider */}
      <div className="w-full h-[3px] flex">
        <div className="w-1/4 h-full bg-yellow-500"></div>
        <div className="w-3/4 h-full bg-gray-300"></div>
      </div>

      {/* Categories List */}
      <div className="pb-4"></div>
      <div className="text-gray-600 text-[14px] space-y-2">
        {fakeCategories.map((category) => (
          <React.Fragment key={category.id}>
            <a
              href="#"
              className="hover:text-[#FFCC00] transition duration-300"
            >
              {category.name}
            </a>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CategoryNewsSide;

import React from "react";

const TagNewsSide = () => {
  // Mock API data
  const tags = [
    { id: 1, name: "Tag 1" },
    { id: 2, name: "Tag 2" },
    { id: 3, name: "Tag 3" },
    { id: 4, name: "Tag 4" },
    { id: 5, name: "Tag 5" },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">TAGS</h2>
      <div className="w-full h-[3px] flex">
        <div className="w-1/4 h-full bg-yellow-500"></div>
        <div className="w-3/4 h-full bg-gray-300"></div>
      </div>
      <div className="pb-4"></div>

      <div className="space-x-4 space-y-4 text-[13px] text-gray-700">
        {tags.map((tag) => (
          <button
            key={tag.id}
            className="px-4 py-2 text-gray-800 border-[1px] border-gray-300 hover:bg-[#FFCC00] hover:text-white transition duration-300"
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagNewsSide;

import React from "react";

const RecentNewsSide = () => {
  // Fake API data
  const fakeData = [
    {
      id: 1,
      title: "Breaking: Major Tech Advancements in 2025",
      date: "17 Jan 25",
      views: 1200,
    },
    {
      id: 2,
      title: "How AI Is Transforming Everyday Life",
      date: "15 Jan 25",
      views: 850,
    },
    {
      id: 3,
      title: "Top 10 Trends in Web Development",
      date: "14 Jan 25",
      views: 650,
    },
    {
      id: 4,
      title: "Exploring the Future of Renewable Energy",
      date: "13 Jan 25",
      views: 950,
    },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      {/* Section Title */}
      <h2 className="text-xl font-bold mb-4">Recent Posts</h2>

      {/* Divider */}
      <div className="w-full h-[3px] flex">
        <div className="w-1/4 h-full bg-yellow-500"></div>
        <div className="w-3/4 h-full bg-gray-300"></div>
      </div>

      {/* News List */}
      {fakeData.map((item) => (
        <div key={item.id} className="py-2 pt-4">
          <a
            href="#"
            className=" hover:underline font-medium hover:text-[#FFCC00] transition duration-300"
          >
            {item.title}
          </a>
          <p className="text-[12px] text-gray-500">
            &#10066; {item.date} &#9865; {item.views} views
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecentNewsSide;

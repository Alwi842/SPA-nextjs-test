import React from "react";

const CommentNews = ({ data }) => {
  return (
    <div className="bg-white p-6 mt-12">
      {/* Comments Section */}
      <div className="mb-8">
        <h2 className="text-[24px] font-semibold mb-4">Comments</h2>
        {data.map((item, index) => (
          <div key={index} className="mb-6 border-b border-gray-300 pb-4">
            <p className="text-gray-800 font-semibold">{item.name}</p>
            <p className="text-gray-600 text-sm">{item.date}</p>
            <p className="text-gray-700 mt-2">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentNews;

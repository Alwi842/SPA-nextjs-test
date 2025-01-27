import React from "react";
import Image from "next/image";
const RelatedNews = ({ data }) => {
  return (
    <>
      <div className="pb-4">
        <div className="bg-black p-2 shadow-sm">
          <p className="font-semibold text-white text-[18px]">Related Posts</p>
        </div>
      </div>
      <div className="flex gap-4 justify-center py-1">
        {data.map((item) => {
          return (
            <div className="w-1/4 flex items-center justify-center relative group">
              {/* <!-- Image --> */}
              <Image
                src={item.img}
                alt="preview"
                width="500"
                height="500"
                className="transition-all duration-300 ease-in-out group-hover:opacity-50"
              />

              {/* <!-- Text Overlay --> */}
              <a href={item.link}>
                <div className="absolute inset-0 bg-yellow-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <span className="text-white font-bold text-xl">
                    {item.title}
                  </span>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between py-4">
        {/* <!-- Previous Post Button --> */}
        <a
          href="#"
          className="bg-white border border-gray-300 px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Previous Post
        </a>

        {/* <!-- Next Post Button --> */}
        <a
          href="#"
          className="bg-white border border-gray-300 px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Next Post
        </a>
      </div>
    </>
  );
};

export default RelatedNews;

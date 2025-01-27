import React from "react";
import Image from "next/image";
const NewsContent = ({
  imgBig,
  imgSmall1,
  imgSmall2,
  title,
  author,
  date,
  comment,
  views,
  content = [],
  children,
}) => {
  return (
    <>
      {/* <!-- Main Content (Left Column) --> */}
      <div className="lg:col-span-2 bg-white p-6">
        <Image
          src={imgBig}
          alt="News Image"
          className="w-full h-auto mb-6"
          height="500"
          width="500"
        />
        {/* src="/PII-750x420.jpg" */}
        <h1 className="text-2xl font-semibold mb-4">{title}</h1>
        <p className="text-gray-600 text-[14px]">
          <span>{date}</span>
          <span>&#128100;{author}</span>
          <span>
            &#128490;{comment > 0 ? comment + " comments" : "No comments"}
          </span>
          <span> &#9865; {views} views</span>
          <span>Share on : F T I P</span>
        </p>
        <hr className="pb-5" />
        <p className="text-3xl font-semibold mb-4"></p>
        {content.map((item) => (
          <p className="py-3 text-gray-700 leading-relaxed">{item}</p>
        ))}

        <div className="flex gap-4 justify-center py-8">
          <div className="w-1/2 h-64 flex items-center justify-center">
            <img src={imgSmall1} alt="preview1" />
          </div>

          <div className="w-1/2 h-64 flex items-center justify-center">
            <img src={imgSmall2} alt="preview2" />
          </div>
        </div>

        <p className="text-gray-700 text-[14px] pb-5">
          <i className="fas fa-bookmark text-[#FFCC00] text-xl"></i>
          Berita FT
        </p>
        {children}
      </div>
    </>
  );
};

export default NewsContent;

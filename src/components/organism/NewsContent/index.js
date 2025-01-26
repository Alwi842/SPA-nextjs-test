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
        <h1 className="text-2xl font-semibold mb-4">
          {title}9 Dosen FT-UMT, di wisuda pada PS. PPI
        </h1>
        <p className="text-gray-600 text-[14px]">
          ðŸ•
          <span>{date}jan 21, 2025</span>
          <span>&#128100;{author}ft</span>
          <span>
            &#128490;{comment > 0 ? comment + " comments" : "No comments"} No
            comments
          </span>
          <span> &#9865; {views} views</span>
          <span>Share on : F T I P</span>
        </p>
        <hr className="pb-5" />
        <p className="text-3xl font-semibold mb-4">
          9 FT lecturers, graduated at PS PPI
        </p>
        {content.map((item) => (
          <p className="text-gray-700 leading-relaxed">{item}</p>
        ))}

        <div className="flex gap-4 justify-center py-8">
          <div className="w-1/2 h-64 flex items-center justify-center">
            <img src="/cont1.jpg" alt="preview1" />
          </div>

          <div className="w-1/2 h-64 flex items-center justify-center">
            <img src="/cont2.jpg" alt="preview2" />
          </div>
        </div>

        <p className="text-gray-700 text-[14px] pb-5">
          <i className="fas fa-bookmark text-[#FFCC00] text-xl"></i>
          Berita FT
        </p>
        {/* <!-- Share Buttons --> */}
        <div className="pb-10">
          <div className="lg:col-span-2 bg-white p-4 border-[1px]">
            <div className="lg:flex gap-4">
              <h2 className="text-xl font-semibold mb-1">Share On</h2>
              <button className="px-4 py-1 bg-blue-600 text-white">
                Facebook
              </button>
              <button className="px-4 py-1 bg-blue-400 text-white">
                Twitter
              </button>
              <button className="px-4 py-1 bg-blue-700 text-white">
                Linked in
              </button>
              <button className="px-4 py-1 bg-red-600 text-white">
                Pintrest
              </button>
            </div>
          </div>
        </div>
        {/* <!-- related posts --> */}
        <div className="pb-4">
          <div className="bg-black p-2 shadow-sm">
            <p className="font-semibold text-white text-[18px]">
              Related Posts
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-center py-1">
          <div className="w-1/4 flex items-center justify-center relative group">
            {/* <!-- Image --> */}
            <img
              src="/cont1.jpg"
              alt="preview1"
              className="transition-all duration-300 ease-in-out group-hover:opacity-50"
            />

            {/* <!-- Text Overlay --> */}
            <div className="absolute inset-0 bg-yellow-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <span className="text-white font-bold text-xl">News lain</span>
            </div>
          </div>
          <div className="w-1/4 flex items-center justify-center relative group">
            {/* <!-- Image --> */}
            <img
              src="/cont1.jpg"
              alt="preview1"
              className="transition-all duration-300 ease-in-out group-hover:opacity-50"
            />

            {/* <!-- Text Overlay --> */}
            <div className="absolute inset-0 bg-yellow-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <span className="text-white font-bold text-xl">News lain</span>
            </div>
          </div>
          <div className="w-1/4 flex items-center justify-center relative group">
            {/* <!-- Image --> */}
            <img
              src="/cont1.jpg"
              alt="preview1"
              className="transition-all duration-300 ease-in-out group-hover:opacity-50"
            />

            {/* <!-- Text Overlay --> */}
            <div className="absolute inset-0 bg-yellow-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <span className="text-white font-bold text-xl">News lain</span>
            </div>
          </div>

          <div className="w-1/4 flex items-center justify-center relative group">
            {/* <!-- Image --> */}
            <img
              src="/cont1.jpg"
              alt="preview1"
              className="transition-all duration-300 ease-in-out group-hover:opacity-50"
            />

            {/* <!-- Text Overlay --> */}
            <div className="absolute inset-0 bg-yellow-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <span className="text-white font-bold text-xl">News lain</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-4">
          {/* <!-- Previous Post Button --> */}
          <button className="bg-white border border-gray-300 px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Previous Post
          </button>

          {/* <!-- Next Post Button --> */}
          <button className="bg-white border border-gray-300 px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Next Post
          </button>
        </div>

        {/* <!-- author --> */}
        <div className="bg-white p-6 pt shadow">
          <div className="flex gap-10">
            <img src="/ft.png" alt="Author Image" className="w-20 h-20" />
            <div>
              <p className="text-lg font-semibold">Ft</p>
            </div>
          </div>
        </div>
        {/* <!-- comment --> */}
        <div className="bg-white p-6 mt-12">
          <h2 className="text-[24px] font-semibold mb-4">Leave a Comment</h2>
          <p className="text-gray-500">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form>
            <div className="mb-4">
              <textarea
                id="comment"
                className="w-full p-3 mt-2 border border-gray-300"
                rows="4"
                placeholder="Write your comment here..."
              ></textarea>
            </div>
            <div className="mb-4">
              <label for="name" className="block font-medium text-gray-500">
                Name *
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-1 mt-2 border border-gray-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label for="email" className="block font-medium text-gray-500">
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-1 mt-2 border border-gray-300"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="flex items-center space-x-2 pb-5">
              <input
                type="checkbox"
                id="save-info"
                className="w-3 h-3 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500"
              />

              <label for="save-info" className="text-gray-700 text-[14px]">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-[#FFCC00] text-white hover:bg-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewsContent;

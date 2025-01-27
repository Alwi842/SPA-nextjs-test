import React from "react";
import Image from "next/image";
const AuthorNews = ({ author, desc, avatar }) => {
  return (
    <>
      <div className="bg-white p-6 shadow">
        <div className="flex gap-10">
          <Image
            src={avatar}
            alt="Author Image"
            className="w-20 h-20"
            width="80"
            height="80"
          />
          <div>
            <p className="text-lg font-semibold">{author}</p>
            <p className="text-gray-600 mt-2">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorNews;

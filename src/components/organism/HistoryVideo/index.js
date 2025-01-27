import React from "react";

const HistoryVideo = ({ link, poster }) => {
  return (
    <>
      <section
        className="bg-fixed bg-center bg-cover py-32 mx-10"
        style={{ backgroundImage: "url('/hero_alec2.jpg')" }}
      >
        <div className="flex items-center justify-center text-center">
          <div className="bg-white p-10">
            <video controls className="w-[650px]" poster={poster}>
              <source src={link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className="mx-10 pb-10">
        <div className="bg-gray-800 justify-center items-center text-center py-32 text-white">
          <p className="text-[28px]">FACULTY OF ENGINEERING</p>
          <p className="text-[14px]">MUHAMMADIYAH UNIVERSITY OF TANGERANG</p>
        </div>
      </section>
    </>
  );
};

export default HistoryVideo;

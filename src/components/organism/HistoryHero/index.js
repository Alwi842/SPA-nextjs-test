import React from "react";

const HistoryHero = () => {
  return (
    <section
      className="bg-fixed bg-center bg-cover lg:py-52 py-32 mx-10 mt-10"
      style={{ backgroundImage: "url('/hero_alec2.jpg')" }}
    >
      <div className="flex items-center justify-center text-center">
        <div className="bg-white bg-opacity-70 lg:p-20 p-10">
          <p className="font-bold lg:text-[42px] text-[20px]">
            FACULTY OF ENGINEERING
          </p>
          <p>UMT</p>
        </div>
      </div>
    </section>
  );
};

export default HistoryHero;

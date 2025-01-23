import React from "react";

const News = ({ children }) => {
  return (
    <>
      <section
        className="bg-cover bg-center ]"
        style={{ backgroundImage: "url('/Raker-ft-23-scaled.jpg')" }}
      >
        <div className="items-center justify-center text-center">
          <div>
            <p className="font-bold text-[32px]">
              FT <span className="text-orange-500">NEWS</span>
            </p>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;

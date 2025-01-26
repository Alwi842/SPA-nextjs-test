import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <section
        class="relative bg-cover bg-center h-40 flex items-center justify-center"
        style={{ backgroundImage: "url('/sub.jpg')" }}
      >
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 class="relative text-white text-[20px] font-semibold uppercase">
          {title}
        </h1>
      </section>
    </>
  );
};

export default Title;

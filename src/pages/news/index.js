import ToTopPage from "@/components/atoms/ToTopPage";
import NewsContent from "@/components/organism/NewsContent";
import Title from "@/components/organism/Title";
import React from "react";

const news = () => {
  return (
    <>
      <ToTopPage />
      <Title title="9 Dosen FT-UMT, di wisuda pada PS. PPI" />
      <section class="py-8">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <NewsContent />
          </div>
        </div>
      </section>
    </>
  );
};

export default news;

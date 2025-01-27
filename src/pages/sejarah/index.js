import ToTopPage from "@/components/atoms/ToTopPage";
import HistoryContent from "@/components/organism/HistoryContent";
import HistoryHero from "@/components/organism/HistoryHero";
import HistoryVideo from "@/components/organism/HistoryVideo";
import Title from "@/components/organism/Title";
import React from "react";

const sejarah = () => {
  return (
    <>
      <ToTopPage />
      <Title title="History" />
      <HistoryHero />
      <HistoryContent struktur="/images/Denah-Struktural-FT-April-2022-Struktur-Organisasi-1-1536x641.jpg" />
      <HistoryVideo
        link="path/to/your-video.mp4"
        poster="/Raker-ft-23-scaled.jpg"
      />
    </>
  );
};

export default sejarah;

import React from "react";
import ToTopPage from "@/components/atoms/ToTopPage";
import Welcome from "@/components/organism/Welcome";
import Statistic from "@/components/organism/Statistic";
import VisionAndMission from "@/components/organism/VisionAndMission";
import KataPengantar from "@/components/organism/KataPengantar";
import Register from "@/components/organism/Register";
import News from "@/components/organism/News";
import Card from "@/components/molecules/Card";
import Invitation from "@/components/organism/Invitation";
import Testimoni from "@/components/organism/Testimoni";
import Carousel from "@/components/organism/Crousel";
import SignUpNews from "@/components/organism/SignUpNews";
const index = () => {
  return (
    <>
      <ToTopPage />
      <Welcome />
      <Statistic />
      <VisionAndMission />
      <KataPengantar />
      <Register />
      <News>
        <Card>
          <Card.Image
            date="01"
            month="Apr"
            image="/PII-320x220.jpg"
            alt="News Image"
          />
          <Card.Body
            className="py-10 px-5"
            views="999"
            title="This Is News"
            breif="This is an exciting news!!!"
          />
          <Card.Footer buttonLink="#" buttonText="Read More" />
        </Card>
      </News>
      <Invitation />
      <Testimoni>
        <Card>
          <Card.Body
            className="py-2 px-3"
            comment="Studying at FT UMT, you will learn a lot about the basics of
                  technology, especially the digital world, and knowledge about
                  how to prepare for the future world of work."
          />
          <Card.Footer
            avatar="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            username="Faiz Muhammad Syam, S.Kom"
            status="Consultant at the Tangerang City Information Communication
                      Service (Programmer) and Designer (Freelance)"
          />
        </Card>
      </Testimoni>
      <Carousel
        slides={[
          "/12.-taipei12.png",
          "/12.-taipei12.png",
          "/12.-taipei12.png",
          "/12.-taipei12.png",
          "/12.-taipei12.png",
          "/12.-taipei12.png",
          "/12.-taipei12.png",
          "/12.-taipei12.png",
          "/12.-taipei12.png",
          "/12.-taipei12.png",
        ]}
      />
      <SignUpNews />
    </>
  );
};

export default index;

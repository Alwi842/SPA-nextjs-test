import ToTopPage from "@/components/atoms/ToTopPage";
import ShareNews from "@/components/molecules/ShareNews";
import AuthorNews from "@/components/molecules/AuthorNews";
import NewsContent from "@/components/organism/NewsContent";
import RelatedNews from "@/components/molecules/RelatedNews";
import Title from "@/components/organism/Title";
import React from "react";
import CommentNews from "@/components/molecules/CommentNews";
import CommentFormNews from "@/components/molecules/CommentFormNews";
import NewsSideContent from "@/components/organism/NewsSideContent";
import RecentNewsSide from "@/components/molecules/RecentNewsSide";
import CategoryNewsSide from "@/components/molecules/CategoryNewsSide";
import TagNewsSide from "@/components/molecules/TagNewsSide/indes";

const news = () => {
  return (
    <>
      <ToTopPage />
      <Title title="9 Dosen FT-UMT, di wisuda pada PS. PPI" />
      <section class="py-8">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <NewsContent
              imgBig="/PII-750x420.jpg"
              imgSmall1="/cont1.jpg"
              imgSmall2="/cont2.jpg"
              author="Ft"
              comment="0"
              views="999"
              title="9 Dosen FT-UMT, di wisuda pada PS. PPI"
              date="jan 21, 2025"
              content={[
                "On Saturday, April 27 2024, a deep impression was created at ITI University when nine lecturers from the Faculty of Engineering, Muhammadiyah University, Tangerang were considered as the main pillars in improving the quality of education. They wore graduation robes at the Indonesian Engineers Association Undergraduate Association, receiving valid Engineer degrees as proof of recognition for their extraordinary contributions to the academic world.",
                "Their presence on the graduation stage was a momentum that inspired many people, especially students who were inspired by the dedication and achievements of these lecturers. In the educational process, the nine lecturers not only teach, but also become mentors, mentors and role models for students. With extensive knowledge and deep skills, they have guided the next generation to become qualified professionals in the engineering field.",
                "By receiving the title of Engineer, the nine lecturers not only demonstrated their personal achievements, but also signaled their commitment to improving the quality of education in Indonesia. They are real examples that self-development and quality improvement do not stop after obtaining the highest academic degree, but continue throughout life. With blazing enthusiasm, the nine lecturers are ready to continue their role as agents of change in creating a generation of competent and qualified engineers.",
              ]}
            >
              <ShareNews facebook="#" twitter="#" pinterest="#" linkedin="#" />
              <RelatedNews
                data={[
                  { img: "/cont1.jpg", title: "news lain", link: "#" },
                  { img: "/cont1.jpg", title: "news lain", link: "#" },
                  { img: "/cont1.jpg", title: "news lain", link: "#" },
                  { img: "/cont1.jpg", title: "news lain", link: "#" },
                ]}
              />
              <AuthorNews
                author="Ft"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum."
                avatar="/ft.png"
              />
              <CommentNews
                data={[
                  {
                    name: "John Doe",
                    date: "January 26, 2025",
                    content:
                      "This is a really insightful article. I learned a lot, and I’m looking forward to more content like this!",
                  },
                  {
                    name: "Jane Smith",
                    date: "January 26, 2025",
                    content:
                      "I totally agree with the points mentioned here. Great job and well written!",
                  },
                  {
                    name: "Alex Johnson",
                    date: "January 25, 2025",
                    content:
                      "I have a different perspective on this, but I appreciate the effort and arguments presented.",
                  },
                ]}
              />
              <CommentFormNews />
            </NewsContent>
            <NewsSideContent>
              <RecentNewsSide />
              <CategoryNewsSide />
              <TagNewsSide />
            </NewsSideContent>
          </div>
        </div>
      </section>
    </>
  );
};

export default news;

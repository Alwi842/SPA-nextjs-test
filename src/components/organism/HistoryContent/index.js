import React from "react";
import Image from "next/image";

const HistoryContent = ({ struktur }) => {
  return (
    <section>
      <div className="lg:px-20 px-10 py-16 space-y-4 leading-7 text-gray-700 text-[20px] my-10 lg:mx-10 text-justify text-indent-first-line bg-white shadow-lg rounded-lg">
        <p>
          Brief History of Muhammadiyah University of Tangerang On June 1, 1993,
          STIE Muhammadiyah Tangerang was established, which is one of the
          charitable enterprises owned by the Muhammadiyah organization under
          the auspices of the Muhammadiyah Higher Education Research and
          Development Council (DIKTILITBANG) based on the Decree of the
          Muhammadiyah Regional Leadership of DKI Jakarta No. 1.A/SK/B/1992
          dated November 10, 1992. Over time, the establishment of STAI
          Muhammadiyah Tangerang in 2000 followed, then STIKES Muhammadiyah
          Tangerang was established again in 2004. The three Muhammadiyah
          charitable enterprises are under the auspices and owned by the
          Muhammadiyah Regional Leadership of Tangerang City.
        </p>
        <p>
          With the demands of an increasingly competitive era, the Muhammadiyah
          Regional Leadership Conference of Tangerang City for the 2005-2010
          period recommended the establishment of the Muhammadiyah University of
          Tangerang. This idea has certainly been considered on the basis that
          Muhammadiyah's Charity in Tangerang City has quite a large potential
          to be developed. In addition, there is an agreement between the
          leaders of the three existing Muhammadiyah Colleges to join in
          establishing UMT. The three institutions are STIEM, STAIM and STIKES
          Muhammadiyah. After going through a very long process, finally the
          Proposal to establish UMT received a positive response from the
          Minister of National Education and on August 3, 2009, the Decree of
          the Minister of National Education of the Republic of Indonesia Number
          109/D/0/2009 concerning the UMT Operational Permit was born. Based on
          the Decree, UMT has had several new study programs resulting from a
          visitation by the Directorate General of Higher Education, National
          Education Office. The study programs include:
        </p>
        <ol className="list-decimal pl-10">
          <li>
            Faculty of Economics (S.1 Accounting, S.1 Management and D.3
            Accounting).
          </li>
          <li>
            Faculty of Islamic Studies (S.1 PAI, S.1 Islamic Banking, and S.1
            Arabic Language Education)
          </li>
          <li>
            Faculty of Health (S.1 Nursing, D.III Midwifery, D.IV Midwife
            Educator and Nursing Profession)
          </li>
          <li>
            Faculty of Teacher Training and Education (S.1 Mathematics
            Education, S.1 English Language Education and S.1 Indonesian
            Language and Literature Education, S.1 PGSD, S.1 PG-PAUD)
          </li>
          <li>
            Faculty of Engineering (S.1 Informatics Engineering, S.1 Electrical
            Engineering, S.1 Civil Engineering, S.1 Mechanical Engineering and
            S.1 Industrial Engineering)
          </li>
          <li>Faculty of Law (S.1 Law)</li>
          <li>
            Faculty of Social and Political Sciences (S.1 Government Science and
            S.1 Communication Science)
          </li>
          <li>
            Postgraduate Program (Master of Management) UMT Academic Guidelines
            2014 – 2015
          </li>
        </ol>
        <p>
          In the era of competition in Higher Education, both PTN and PTS, the
          Faculty of Engineering UMT continues to improve itself to become a
          Faculty of Engineering that has an equal place with other Faculties of
          Engineering. This is done so that FT-UMT is able to compete on a
          regional, national and even international scale and can be trusted by
          all groups. The Faculty of Engineering, Universitas Muhammadiyah
          Tangerang is led by the Dean:
        </p>
        <p className="pl-10">
          <span className="font-semibold">Ir. Saiful Haq , ST, M.Sc.</span>.
          with the Decree of the Muhammadiyah PP concerning the Appointment of
          the Dean of FT UMT for the 2009-2014 Period and continued leadership
          of the Faculty of Engineering by
          <span className="font-semibold">Rohmat Taufiq, ST., M.Kom</span> as
          the Dean of FT UMT for the 2022-2027 period.
        </p>
        <p>
          Currently, the UMT Faculty of Engineering has 5 Study Programs with
          Accreditation Status "B" in 5 Fields of Science:
        </p>
        <ol className="list-decimal pl-10">
          <li>Informatics Engineering Study Program.</li>
          <li>Industrial Engineering Study Program.</li>
          <li>Mechanical Engineering Study Program.</li>
          <li>Civil Engineering Study Program.</li>
          <li>Electrical Engineering Study Program.</li>
        </ol>
        <div className="flex items-center justify-center">
          <Image
            src={struktur}
            alt="Struktur organisasi"
            width="600"
            height="220"
          />
        </div>
        <p className="text-center text-gray-600 text-[12px]">
          FACULTY OF ENGINEERING ORGANIZATIONAL STRUCTURE - UMT
        </p>
      </div>
    </section>
  );
};

export default HistoryContent;

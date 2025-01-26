import React from "react";
const Card = ({ children }) => {
  return (
    <>
      <div className="relative rounded bg-white shadow overflow-hidden group">
        {children}
      </div>
    </>
  );
};
function Image({ image, alt, date, month }) {
  return (
    <>
      <div className="overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full transform transition duration-500 ease-in-out group-hover:scale-110"
        />
        {date && month ? (
          <div className="absolute left-[80%] -mt-4 transform bg-[#dfb871] px-1 py-[1px] text-white z-10">
            <p className="font-bold text-[22px]">{date}</p>
            <p>{month}</p>
          </div>
        ) : null}
      </div>
    </>
  );
}
function Body({ views, title, breif, link, comment, className }) {
  return (
    <>
      <div className={className}>
        {views ? <p className="text-gray-600">&#9865; {views} views</p> : null}
        {title ? <p className="font-bold text-lg">{title}</p> : null}
        {breif ? <p className="text-gray-600">{breif}</p> : null}
        {comment ? <p class="text-gray-600 text-[13px]">{comment}</p> : null}
      </div>
    </>
  );
}
function Footer({ buttonLink, buttonText, avatar, status, username }) {
  return (
    <>
      {buttonLink && buttonText ? (
        <div className="pb-4 mt-4 flex justify-center">
          <a
            href={buttonLink}
            className="bg-[#dfb871] text-white py-2 px-6 hover:bg-black hover:text-white transition duration-300"
          >
            {buttonText}
          </a>
        </div>
      ) : null}
      {avatar && status && username ? (
        <div class="pb-4 px-3">
          <div class="flex items-center mt-4">
            <img
              src={avatar}
              alt="User profile"
              class="w-14 h-14 rounded-full"
            />

            <div class="ml-3 text-left">
              <p class="text-[12px] font-medium text-gray-700">{username}</p>
              <p class="text-[12px] text-gray-500 leading-3">{status}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
Card.Image = Image;
Card.Body = Body;
Card.Footer = Footer;
export default Card;

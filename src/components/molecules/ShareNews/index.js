import React from "react";

const ShareNews = ({ facebook, twitter, linkedin, pinterest }) => {
  return (
    <div className="pb-10">
      <div className="lg:col-span-2 bg-white p-4 border-[1px]">
        <div className="lg:flex gap-4">
          <h2 className="text-xl font-semibold mb-1">Share On</h2>
          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 bg-blue-600 text-white"
            >
              Facebook
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 bg-blue-400 text-white"
            >
              Twitter
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 bg-blue-700 text-white"
            >
              LinkedIn
            </a>
          )}
          {pinterest && (
            <a
              href={pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 bg-red-600 text-white"
            >
              Pinterest
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShareNews;

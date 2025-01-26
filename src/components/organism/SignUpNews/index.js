import React from "react";

const SignUpNews = () => {
  return (
    <section>
      <div class="lg:flex items-center justify-center bg-[#FF8500] py-20 px-2 lg:px-32">
        <div class="lg:w-1/2 text-left">
          <p class="text-[30px] font-bold">Newsletter Sign Up​</p>
          <p class="text-[13px] text-gray-600">
            Subscribe now and receive the latest news and updates!
          </p>
        </div>

        <div class="lg:w-1/2 pt-10 lg:text-right text-center">
          <a
            href="#"
            class="bg-white text-black font-bold py-3 px-6 hover:bg-black hover:text-white transition duration-300"
          >
            Subscribe
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignUpNews;

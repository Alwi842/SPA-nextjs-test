import React from "react";

const CommentFormNews = () => {
  function handleCommentSubmit(event) {
    event.preventDefault(); // Prevent the page from refreshing
    console.log("Comment submitted!");

    // Accessing form values
    const comment = event.target.comment.value;
    const name = event.target.name.value;
    const email = event.target.email.value;

    // Logging the data (you can replace this with an API call or other actions)
    console.log("Comment:", comment);
    console.log("Name:", name);
    console.log("Email:", email);

    // Optionally store data in localStorage
    localStorage.setItem("comment", comment);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    // Clear the form fields after submission
    event.target.reset();

    // Optional redirection or UI feedback
    alert("Your comment has been submitted!");
  }

  return (
    <div className="bg-white p-6 mt-12">
      {/* Comment Form Section */}
      <h2 className="text-[24px] font-semibold mb-4">Leave a Comment</h2>
      <p className="text-gray-500">
        Your email address will not be published. Required fields are marked *
      </p>
      <form onSubmit={handleCommentSubmit}>
        <div className="mb-4">
          <textarea
            id="comment"
            name="comment"
            className="w-full p-3 mt-2 border border-gray-300"
            rows="4"
            placeholder="Write your comment here..."
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-gray-500">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-1 mt-2 border border-gray-300"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-gray-500">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-1 mt-2 border border-gray-300"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="flex items-center space-x-2 pb-5">
          <input
            type="checkbox"
            id="save-info"
            className="w-3 h-3 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="save-info" className="text-gray-700 text-[14px]">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-[#FFCC00] text-white hover:bg-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentFormNews;

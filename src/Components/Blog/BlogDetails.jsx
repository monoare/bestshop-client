import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";
import { CgProfile } from "react-icons/cg";
import Footer from "../Footer/Footer";

const BlogDetails = () => {
  // Get the selected blog ID from the URL
  const { id } = useParams();

  console.log(id);

  const loadBlog = useLoaderData();
  console.log(loadBlog);

  // Find the selected blog by ID
  const selectedBlog = loadBlog.find((blog) => blog.id === parseInt(id));
  console.log("match", selectedBlog);

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center">
        <div className="w-[90vw] lg:w-[70vw] mb-20">
          <h1 className="text-xl md:text-4xl my-5 text-center font-bold font-raleway">
            {selectedBlog.title}
          </h1>
          <p className="text-sm uppercase text-center mb-10">
            By <span className="font-bold">{selectedBlog.author}</span>{" "}
            <span className="text-[#777777]">{selectedBlog.date}</span>
            <span className="font-bold"> in Fashion</span>
          </p>
          <div>
            <img src={selectedBlog.image1} alt="" />
          </div>
          <div className="lg:w-[50vw] mx-auto">
            <div className="md:text-2xl font-bold font-raleway mt-10">
              <span>1. </span>
              <span>{selectedBlog.descriptions[0].title}</span>
            </div>
            <div>
              <p className="md:text-lg md:leading-8 text-[#777777] mt-5">
                {selectedBlog.descriptions[0].content}
              </p>
            </div>
            <div className="md:text-2xl font-bold font-raleway mt-10">
              <span>2. </span>
              <span>{selectedBlog.descriptions[1].title}</span>
            </div>
            <div>
              <p className="md:text-lg md:leading-8 text-[#777777] mt-5">
                {selectedBlog.descriptions[1].content}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-0 mt-10">
            <img
              className="lg:w-[40vw] lg:h-[50vh]"
              src={selectedBlog.image2}
              alt=""
            />
            <img
              className="lg:w-[40vw] lg:h-[50vh]"
              src={selectedBlog.image3}
              alt=""
            />
            <img
              className="lg:w-[40vw] lg:h-[50vh]"
              src={selectedBlog.image4}
              alt=""
            />
            <img
              className="lg:w-[40vw] lg:h-[50vh]"
              src={selectedBlog.image5}
              alt=""
            />
          </div>
          <div className="lg:w-[50vw] mx-auto">
            <p className="md:text-lg md:leading-8 text-[#777777] mt-5">
              {" "}
              {selectedBlog.long_quote}
            </p>
            <div className="my-5 md:my-20">
              <hr />
            </div>
            <div>
              <h1 className="md:text-4xl font-bold">
                <span>3 Thoughts on</span> <span>{selectedBlog.title}</span>
              </h1>
              <div className="mt-10 flex flex-col md:flex-row items-center gap-6">
                <p className="rounded-full max-w-fit max-h-fit p-3 md:p-6 bg-slate-100">
                  <CgProfile className="text-2xl md:text-5xl" />
                </p>
                <div>
                  <p className="uppercase text-xs md:text-base mb-5">
                    By <span className="font-bold">{selectedBlog.author}</span>{" "}
                    <span className="text-[#777777]">{selectedBlog.date}</span>
                  </p>
                  <p className="md:text-lg">
                    {selectedBlog.thoughts[0].content}
                  </p>
                </div>
              </div>

              <div className="mt-10 md:ml-28 flex flex-col md:flex-row items-center gap-6">
                <p className="rounded-full max-w-fit max-h-fit p-3 md:p-6 bg-slate-100">
                  <CgProfile className="text-2xl md:text-5xl" />
                </p>
                <div>
                  <p className="uppercase text-xs md:text-base mb-5">
                    By <span className="font-bold">{selectedBlog.author}</span>{" "}
                    <span className="text-[#777777]">{selectedBlog.date}</span>
                  </p>
                  <p className="md:text-lg">
                    {selectedBlog.thoughts[1].content}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col md:flex-row items-center gap-6">
                <p className="rounded-full max-w-fit max-h-fit p-3 md:p-6 bg-slate-100">
                  <CgProfile className="text-2xl md:text-5xl" />
                </p>
                <div>
                  <p className="uppercase text-xs md:text-base mb-5">
                    By <span className="font-bold">{selectedBlog.author}</span>{" "}
                    <span className="text-[#777777]">{selectedBlog.date}</span>
                  </p>
                  <p className="md:text-lg">
                    {selectedBlog.thoughts[0].content}
                  </p>
                </div>
              </div>
            </div>
            <div className="my-20">
              <hr />
            </div>
            <div>
              <h1 className="text-xl md:text-4xl font-bold mb-10">
                Leave a Comment
              </h1>
              <form action="">
                <label className="md:text-lg pb-4">Name</label>
                <input
                  className="border mt-2 mb-4 font-semibold text-gray-700 w-full p-3"
                  type="text"
                  placeholder="Enter Your Name"
                />

                <label className="md:text-lg pb-4">Email address</label>
                <input
                  className="border mt-2 mb-4 font-semibold text-gray-700 w-full p-3"
                  type="email"
                  placeholder="programminghero@example.com"
                />

                <label className="md:text-lg pb-4">Comment</label>
                <textarea
                  className="border mt-2 mb-4 font-semibold text-gray-700 w-full p-3"
                  style={{ height: "100px" }} // Set the desired height here
                  type="text"
                  placeholder="Write your comments here (up to 1500 words)"
                  maxLength="1500" // Set the maximum word limit
                />
                <button className="bg-black text-white p-2 md:p-4 font-bold">
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default BlogDetails;

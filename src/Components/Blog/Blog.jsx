import { useEffect, useState } from "react";
import { LiaCommentAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleReadMore = (id) => {
    console.log(id);
  };

  return (
    <div>
      <div className="text-center my-5">
        <h1 className="text-2xl md:text-5xl text-[#48CAB2] font-bold font-raleway">
          Fashion and Style Blog
        </h1>
      </div>

      {/* Center the blogs on the page using Flexbox */}
      <div className="flex justify-center">
        <div className="w-[70vw]">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <div>
                <img src={blog.image1} alt="" />
              </div>
              <h1 className="text-xl md:text-4xl my-5  font-bold font-raleway">
                {blog.title}
              </h1>
              <p className="md:text-lg mb-5">
                {blog.short_description}{" "}
                <Link
                  onClick={() => handleReadMore(blog.id)}
                  to={`/blogDetails/${blog.id}`}
                  className="font-bold text-black hover:underline"
                >
                  Read More...
                </Link>
              </p>
              <div className="mb-10 flex flex-col md:flex-row justify-between">
                <p className="text-sm">
                  by <span className="font-bold">{blog.author}</span>{" "}
                  <span className="">{blog.date}</span>
                  <span className="font-bold"> in Cool, Vintage</span>
                </p>
                <p className="flex pt-4">
                  <span>
                    <LiaCommentAltSolid className="text-3xl" />
                  </span>
                  <span className="pl-2 text-xs md:text-sm">25 COMMENT(S)</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

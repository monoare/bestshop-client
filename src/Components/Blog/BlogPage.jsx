import Footer from "../Footer/Footer";
import Navbar from "../HomePage/Navbar/Navbar";
import Blog from "./Blog";

const BlogPage = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Blog></Blog>
      </div>
      <div className="bg-gray-100 py-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default BlogPage;

import React, { useContext } from "react";
// import Spinner from "./Spinner";
import { AppContext } from "../Context/AppContext";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  //step-3: Consume
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="flex flex-col gap-y-10 md:my-4 my-0">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">Loading...</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found</p>
        </div>
      ) : (
        posts.map((post) => {
          return <BlogDetails key={post.id} post={post} />;
        })
      )}
    </div>
  );
};

export default Blogs;

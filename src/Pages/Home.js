import React from "react";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="py-24 mx-auto max-w-[720px] px-[25px] ">
          <Blogs />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Home;

import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

//step-1: creating context
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  //children of AppContextProvider is App.js
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();

  //fetch blog data
  const fetchBlogPosts = async (page = 1, tag = null, category) => {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }
    try {
      const result = await fetch(url);
      const data = await result.json();
      if (!data.posts || data.posts.length === 0) {
        throw new Error("Something went wrong!");
      }
      console.log("API Response: ", data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in fetching BlogPosts: ", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  };

  //handler when next and previous button are clicked
  function handlePageChange(page) {
    navigate({ search: `?page=${page}` });
    setPage(page);
    // fetchBlogPosts(page);
  }

  //data to be passed (snapshot of data (it includes functions, methods and states)) also called as Context
  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  //step-2: context providing
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>; //here, children is App.js(i.e. the children of AppContextProvider defined above). by this line we provide the data "value" to the children (here, App.js)
}

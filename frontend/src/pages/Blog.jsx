import { useParams } from "react-router-dom";
import { getBlogbyid } from "../api/API";
import { useState, useEffect } from "react";
import dateFormat from "dateformat";

export const Blog = () => {
  const { id } = useParams(); // Get blog ID from URL
  const [blogs, setBlogs] = useState(null);
  const apiURL = "http://localhost:8000/";
  
  // Fetch individual blog data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const result = await getBlogbyid(id);
      console.log("API result:", result);
      // Handle different API response formats
      if (Array.isArray(result.data)) {
        setBlogs(result.data[0]);
      } else {
        setBlogs(result.data);
      }
    };
    fetchData();
  }, [id]);
  
  return (
    <div className="flex justify-center items-center">
      {!blogs ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col w-[60%] overflow-hidden">
          {/* Blog title */}
          <h1 className="mt-1 mb-1 text-4xl font-extrabold">{blogs.title}</h1>
          
          {/* Publication date */}
          <div className="flex mt-4 mb-4">
            <small>{dateFormat(blogs.createdon, "dddd, mmmm dS, yyyy")}</small>
          </div>
          
          {/* Blog featured image */}
          <img
            className="rounded-lg"
            src={apiURL + blogs.image.replace(/\\/g, "/")}
            alt=""
          />
          
          {/* Blog content */}
          <div className="flex">
            <p className="text-lg mt-4 mb-4 leading-6">{blogs.post}</p>
          </div>
        </div>
      )}
    </div>
  );
};
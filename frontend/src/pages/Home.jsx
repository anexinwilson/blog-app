import React, { useState,useEffect } from "react";
import { BlogCard } from "../components/BlogCards";
import {getBlogs, uploadFile} from "../api/API"
import { useSearchParams } from "react-router";


export const Home = () => {

  const [blogs,setBlogs] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  

  useEffect(() => {
    const fetchData = (async() => {
      const allBlogs = await getBlogs()
      setBlogs(allBlogs.data)
      // console.log(allBlogs)
      
    })
    fetchData()
  },[])

  useEffect(() => {
    const fetchData = (async() => {
      const allBlogs = await getBlogs(searchParams.get('category'))
      setBlogs(allBlogs.data)
      // console.log(allBlogs)
      
    })
    fetchData()
  },[searchParams])

  const data = [
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/200/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/208/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/208/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/206/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/200/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/204/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/203/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/202/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/201/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
  ];
  return (
    <div>
      {/* <p>{JSON.stringify(blogs)}</p> */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {blogs && blogs.map((posts,i) => {
            return <BlogCard key={i} blogdata = {posts}></BlogCard>
        })
        }

    </div>
    </div>
  );
};

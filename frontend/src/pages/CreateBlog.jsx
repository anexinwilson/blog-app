import { useState } from "react";
import { uploadFile, createBlog } from "../api/API";
import { useNavigate } from "react-router-dom";


export const CreateBlog = () => {

  const navigate = useNavigate(); 

  const blankBlog = {
    title: "",
    image: "",
    post: "",
    category: "",
  };

  const [newBlog, setNewBlog] = useState(blankBlog);

  const handleUpload = async (e) => {
    let uploadedFile = await uploadFile(e.target.files[0]);
    if (uploadedFile.path) {
      setNewBlog(prev => ({ ...prev, image: uploadedFile.path }));
    }
  };

  const handleSubmit = async () => {
    await createBlog(newBlog);   
    setNewBlog(blankBlog);      
    alert("Added");
    navigate("/");
  };

  const menu = [
    { text: "Nature", path: "/" },
    { text: "Travel", path: "/" },
    { text: "Technology", path: "/" },
    { text: "Politics", path: "/" },
  ];
  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-slate-200 w-[60%] p-5 rounded-xl">
        <h1 className="text-2xl mb-5 ">Create Blog Post</h1>
        {/* <small>{JSON.stringify(newBlog)}</small> */}
        <div className="flex flex-col">
          <label htmlFor="" className="ml-1 text-gray-500">
            Title
          </label>
          <input
            type="text"
            value={newBlog.title}
            onChange={(e) => {
              return setNewBlog({ ...newBlog, title: e.target.value });
            }}
            className="h-10 border border-gray-300 my-2 p-2 bg-white"
          />
          <label htmlFor="" className="ml-1 text-gray-500">Category</label>
          <select
            name=""
            id=""
            value={newBlog.category}
            onChange={(e) => {
              return setNewBlog({ ...newBlog, category: e.target.value });
            }}
            className="h-10 border border-gray-300 bg-white my-2 p-2"
          >
            <option value="" default disabled>
              Select
            </option>
            {menu.map((category) => {
              return <option key={category.text} value={category.text}>{category.text}</option>;
            })}
          </select>
          <label htmlFor="" className="ml-1 text-gray-500">
            Image
          </label>
          <input
            type="file"
            onChange={(e) => {
              return handleUpload(e);
            }}
            className="h-10  border-gray-500 rounded my-2 p-2  bg-white"
          />
          <label htmlFor="" className="ml-1 text-gray-500">
            Post
          </label>
          <textarea
            value={newBlog.post}
            onChange={(e) =>setNewBlog(prev => ({ ...prev, post: e.target.value }))}
            className="h-40 border border-gray-300 my-2 p-2 bg-white resize-none"
          />

          <hr />
          <button
            className="bg-slate-500 text-white h-8 w-[100px] m-2 rounded"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

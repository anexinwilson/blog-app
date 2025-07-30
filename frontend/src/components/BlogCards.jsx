import { Home } from "../pages/Home"
import { Link } from "react-router-dom"

export const BlogCard = ((props) => {
    let blogdata = props.blogdata
    const apiURL = 'http://localhost:8000/'
    const imageUrl = apiURL + encodeURIComponent(blogdata.image);
    console.log(blogdata)
    
    return (
        <div className="bg-white shadow-md overflow-hidden rounded-xl">
            {/* Link to individual blog post */}
            <Link to={`/blog/${blogdata.id}`}>
            <div className="flex flex-col w-full">
                {/* Blog thumbnail image */}
                <img className="w-full h-[250px] object-contain" src={apiURL+blogdata.image} alt="" />
                
                {/* Blog content preview */}
                <div className="p-2">
                    <h2 className="mt-1 text-xl text-left">{blogdata.title}</h2>
                    <p className="text-sm opacity-70 text-left">{blogdata.description}</p>
                </div>
            </div>
            </Link>
        </div>
    )
})
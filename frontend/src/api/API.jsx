import axios from "axios";

const apiURL = "http://localhost:8000";

// Get blogs with optional category filter
export const getBlogs = async (categ) => {
  try {
    const url = categ ? `${apiURL}/blog/${categ}` : `${apiURL}/blog`;
    const result = await axios.get(url);
    return result.data; 
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
};

// Create new blog post
export const createBlog = async (data) => {
  try {
    const result = await axios.post(`${apiURL}/blog`, data);
    if (result.status === 200) {
      console.log('Blog created'); 
    }
  } catch (error) {
    console.error('Error creating blog:', error);
  }
};

// Alternative fetch implementation (commented out)
// export const createBlog = async (data) => {
//   try {
//     const response = await fetch(`${apiURL}/blog`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });
//     if (response.ok) {
//       console.log('Blog created');
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

// Get single blog by ID
export const getBlogbyid = async (id) => {
  try {
    const result = await axios.get(apiURL + '/blog/' + id);
    return result.data; 
  } catch (error) {
    console.error('Error fetching blog by id:', error);
  }
};

// Upload image file to server
export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const result = await axios.post(apiURL + "/blogimage", formData);
    return result.data; 
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};
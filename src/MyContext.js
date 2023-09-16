import { createContext, useState } from 'react';
import axios from 'axios';

export const BlogContext = createContext("");


const URL = 'http://localhost:5000/api';

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [message, setMessage] = useState("Welcome");

    const fetchBlogs = () => {
        axios.get(`${URL}/get`)
        .then((res) => setBlogs(res?.data))
    };

    const fetchBlogById = (slug) => {
        return new Promise((resolve, reject) => {
            axios.get(`${URL}/getById/${slug}`)
            .then((res) => {
                resolve(res);
            })
        })
    }
  
    const createBlog = (blog) => {
        return new Promise((resolve, reject) => {
            axios.post(`${URL}/save`, blog)
            .then((res) => {
                resolve(res);
            })
        });
        
    };
  
    const updateBlog = (blog) => {
        return new Promise((resolve, reject) => {
            axios.post(`${URL}/update/${blog._id}`, {
                "title": blog?.title,
                "description": blog?.description
            })
            .then((res) => {
                resolve(res);
            })
        });
    };
  
    const deleteBlog = (blogId) => {
        return new Promise((resolve, reject) => {
            axios.delete(`${URL}/delete/${blogId}`)
            .then((res) => {
                resolve(res);
            })
        })
    };
  
    return (
      <BlogContext.Provider
        value={{ blogs, fetchBlogs, fetchBlogById, createBlog, updateBlog, deleteBlog, message, setMessage }}
      >
        {children}
      </BlogContext.Provider>
    );
  };
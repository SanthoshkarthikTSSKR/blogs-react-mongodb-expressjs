import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BlogContext } from "../MyContext";

function HomePage() {
    const navigate = useNavigate();
    const { blogs, fetchBlogs, deleteBlog, setMessage } = useContext(BlogContext);

    useEffect(() => {
        fetchBlogs();
    }, [])

    const handleDelete = (slug) => {
        deleteBlog(slug).then((res) => {
            let message = res?.data?.message;
            if (message) {
                setMessage(message);
            }
            fetchBlogs();
        });
    };

    return (
        <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Blogger App</h1>
            <div className="block max-w-sm p-6">
                <Link className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" to={`/blog/create`}>Create Blog</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {(blogs || [])?.map((blog) => (
                    <div key={blog._id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div className="block max-w-sm p-6">
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{wordBreak: "break-all"}}>{blog.title}</h2>
                            <p className="font-normal text-gray-700 dark:text-gray-400" style={{wordBreak: "break-all"}}>{blog.description?.substring(0,50)}</p>
                        </div>
                        <div className="block max-w-sm p-6">
                            <Link className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300" to={`/blog/${blog._id}`}>Read More</Link>
                            <Link className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300" to={`/blog/edit/${blog._id}`}>Edit</Link>
                            <button className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300" onClick={() => handleDelete(blog._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
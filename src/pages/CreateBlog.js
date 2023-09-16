import React, { useState, useContext, useCallback } from 'react';
import { BlogContext } from "../MyContext";
import { useParams, useNavigate  } from 'react-router-dom';

const CreateBlog = () => {
    const { blogs, createBlog, setMessage } = useContext(BlogContext);
    const [newBlog, setNewBlog] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        let result = {};
        result[e.target.id] = e.target.value;
        setNewBlog({...newBlog, ...result});
    }

    const handleCreateBlog = () => {
        createBlog(newBlog).then((res) => {
            let message = res?.data?.message;
            if (message) {
                setMessage(message);
            }
            navigate('/');
        });
    }

    return (
        <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Create Blog</h1>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id={"title"} onChange={handleChange} placeholder="Title" />
                </div>
                <div>
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input name="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id={"description"} onChange={handleChange} placeholder="Description" />
                </div>
                <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleCreateBlog}>Add Blog</button>
            </div>
        </div>
    );
}

export default CreateBlog;
import React, { useEffect, useContext, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { BlogContext } from "../MyContext";

function EditBlog() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { blogs, updateBlog, fetchBlogById, setMessage } = useContext(BlogContext);
    const [blog, setBlog] = useState({});
    const [newBlog, setNewBlog] = useState({});

    useEffect(() => {
        fetchBlogById(slug)
        .then((res) => setBlog(res.data));
    }, [slug]);

    const handleChange = (e) => {
        let result = {};
        result["_id"] = slug;
        result[e.target.id] = e.target.value;
        setNewBlog({...newBlog, ...result});
    }

    const handleSubmit = () => {
        updateBlog(newBlog).then((res) => {
            let message = res?.data?.message;
            if (message) {
                setMessage(message);
            }
            navigate('/');
        });
    };

    return (
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="title" name="title" defaultValue={blog?.title || ""} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="description" name="description" defaultValue={blog?.description || ""} onChange={handleChange} />
            </div>
            <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default EditBlog;
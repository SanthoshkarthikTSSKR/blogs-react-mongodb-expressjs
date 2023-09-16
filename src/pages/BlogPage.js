import React, { useEffect, useContext, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { BlogContext } from "../MyContext";
import { Link } from 'react-router-dom';

function BlogPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { fetchBlogById, deleteBlog, setMessage } = useContext(BlogContext);
    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetchBlogById(slug).then((res) => {
            setBlog(res.data)
        })
    }, [slug]);

    const handleDelete = () => {
        deleteBlog(slug).then((res) => {
            let message = res?.data?.message;
            if (message) {
                setMessage(message);
            }
            navigate('/');
        });
    };

    return (
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{blog?.title}</h1>
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{wordBreak: "break-all"}}>{blog?.description}</p>
            <Link className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300" to={`/blog/edit/${blog._id}`}>Edit</Link>
            <button className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300" onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default BlogPage;
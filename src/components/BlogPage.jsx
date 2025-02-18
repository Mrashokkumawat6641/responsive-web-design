import { useState } from 'react';
import useBlogStore from '../store/store1.js';

const BlogPage = () => {
    const { posts, addPost, removePost, clearPosts } = useBlogStore();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAddPost = async () => {
        if (!title || !content) {
            alert("Title and Content are required!");
            return;
        }

        const newPost = { title, content };
        await addPost(newPost);
        setTitle('');
        setContent('');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 dark:text-white text-black">Blog Page</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 mb-2 w-full rounded-xl"
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="border p-2 mb-2 w-full rounded-xl"
                />
                <button
                    onClick={handleAddPost}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add Post
                </button>
                <button
                    onClick={clearPosts}
                    className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-700"
                >
                    Clear Posts
                </button>
            </div>
            <div>
                {posts.length === 0 ? (
                    <p className='dark:text-white text-black'>No posts available.</p>
                ) : (
                    <ul>
                        {posts.map((post) => (
                            <li key={post._id} className="border p-2 mb-2">
                                <h2 className="font-bold">{post.title}</h2>
                                <p>{post.content}</p>
                                <button
                                    onClick={() => removePost(post._id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default BlogPage;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/post/postsSlice';

const UserCard = () => {


    const { posts, isLoading, isError } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])



    if (isLoading) {
        return <h2 className='text-xl text-center font-bold'>Loading...</h2>
    }
    if (isError) {
        return <h2>{isError}</h2>
    }

    if (!Array.isArray(posts) || posts.length === 0) {
        return <h2 className="text-xl text-center text-gray-500">No data available</h2>;
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
            {posts.map((post, index) =>
                <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800">{post?.name}</h2>
                    <p className="text-gray-600">{post?.username}</p>
                    <p className="text-blue-500">{post?.email}</p>
                    <div className="mt-4 text-gray-700">
                        <p><strong>Address:</strong> {post?.address?.street}</p>
                        <p><strong>City:</strong> {post?.address?.city}</p>
                        <p><strong>Zipcode:</strong> {post?.address?.zipcode}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserCard;
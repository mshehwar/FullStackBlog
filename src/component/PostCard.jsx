import React from 'react';
import service from '../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PostCard({ $id, title, featuredImage, content, status }) {
  const navigate = useNavigate();
  const authStatus = useSelector(state => state.auth.status);

  const handleClick = (e) => {
    e.preventDefault();
    if (!authStatus) {
      navigate("/login");
    } else {
      navigate(`/post/${$id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group w-full max-w-[350px] h-[500px] cursor-pointer border border-gray-300 rounded-2xl bg-white transition-all duration-300 hover:shadow-md m-2" // m-2 adds spacing between cards
    >
      <div className="h-[240px] overflow-hidden rounded-t-2xl">
        <img
          src={service.getFileView(featuredImage)}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-[260px]">
        <div>
          <span className="text-indigo-600 font-medium mb-2 block">{status} Blog Post</span>
          <h4 className="text-lg text-gray-900 font-semibold leading-6 mb-3">{title}</h4>
          <p className="text-gray-500 text-sm leading-5">
            {content.replace(/<[^>]+>/g, '').substring(0, 100)}...
          </p>
        </div>
        <span className="text-indigo-600 font-semibold mt-4 block">Read more..</span>
      </div>
    </div>
  );
}

export default PostCard;

import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../component';
import service from '../appwrite/config';

function AllPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow w-full py-8">
        <h1 className='font-bold text-3xl'>All Post</h1>
        <Container>
          {loading ? (
            <div className="flex justify-center items-center min-h-[60vh]">
              <span className="text-lg font-medium animate-pulse">Loading posts...</span>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {posts.map((post) => (
                <PostCard key={post.$id} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-10">
              No posts found.
            </div>
          )}
        </Container>
      </div>
      {/* Your footer will be placed below this component */}
    </div>
  );
}

export default AllPost;

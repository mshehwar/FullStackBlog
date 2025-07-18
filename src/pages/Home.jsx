// import React, { useEffect, useState } from 'react';
// import service from '../appwrite/config';
// import { Container, PostCard } from '../component';
// import Hero from '../component/Hero';
// import Carosal from '../component/Carosal';

// function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch posts when the component mounts
//     service.getPosts([]).then((posts) => {
//       if (posts) {
//         setPosts(posts.documents);
//       }
//     });
//   }, []); // Empty dependency array to ensure it only runs on mount

//   if (posts.length === 0) {
//     return (
//       <div className="w-full max-w-8xl">
//         <Hero/>
//         <Container>
//           <div className="flex flex-wrap h-screen">
//             <div className="p-2 w-full">
//               <h1 className="text-2xl font-bold hover:text-gray-500">
                
//                     <Container>
//        <h1 className='text-4xl py-5 font-bold'>Latest Blogs</h1>
//         <div className="flex flex-wrap py-10">
//           {posts.map((post) => (
//             <div key={post.$id} className="p-2 w-1/4">
//               <PostCard {...post} />
//             </div>
//           ))}
//         </div>
//       </Container>
               
//               </h1>
//             </div>
//           </div>
//         </Container>
//         <Carosal/>
//       </div>
//     ) ;
//   }

//   return (
//     <div className="w-full max-w-8xl">
//        <Hero/>
//       <Container>
//        <h1 className='text-4xl py-5 font-bold'>Latest Blogs</h1>
//         <div className="flex flex-wrap py-10">
//           {posts.map((post) => (
//             <div key={post.$id} className="p-2 w-1/4">
//               <PostCard {...post} />
//             </div>
//           ))}
//         </div>
//       </Container>
//       <Carosal/>
//     </div>
//   );
// }

// export default Home;
import React, { useEffect, useState } from 'react';
import service from '../appwrite/config';
import { Container, PostCard } from '../component';
import Hero from '../component/Hero';
import Carosal from '../component/Carosal';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts and slice only first 4
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents.slice(0, 4)); // Get latest 4
      }
    });
  }, []);

  return (
    <div className="w-full max-w-8xl">
      <Hero />

      <Container>
        <h1 className="text-4xl py-5 font-bold">Latest Blogs</h1>

        <div className="flex flex-wrap py-10">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-full md:w-1/2 lg:w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-6">
          <Link
            to="/all-posts"
            className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            View More Posts
          </Link>
        </div>
      </Container>

      <Carosal />
    </div>
  );
}

export default Home;

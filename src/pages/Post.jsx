import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button, Container } from "../component";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
        setLoading(false);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  if (loading) {
    return (
      <Container>
        <div className="animate-pulse mt-12 space-y-6">
          <div className="h-64 w-full bg-gray-200 rounded-xl" />
          <div className="h-6 w-3/4 bg-gray-300 rounded" />
          <div className="h-4 w-full bg-gray-300 rounded" />
          <div className="h-4 w-5/6 bg-gray-300 rounded" />
          <div className="h-4 w-2/3 bg-gray-300 rounded" />
        </div>
      </Container>
    );
  }

  return post ? (
    <div className="py-12">
      <Container>
        <div className="relative w-[60rem] rounded-2xl overflow-hidden shadow-md mb-10">
          <img
            src={service.getFileView(post.featuredImage)}
            alt={post.title}
            className="w-full max-h-[400px] object-cover"
          />

          {isAuthor && (
            <div className="absolute top-4 right-4 flex gap-2">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-600" className="text-white hover:bg-green-700">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-600" className="text-white hover:bg-red-700" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>

        <div className="text-start mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            {post.title}
          </h1>
        </div>

        <div className="prose prose-lg max-w-none prose-slate prose-img:rounded-xl prose-img:shadow-md text-start">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}
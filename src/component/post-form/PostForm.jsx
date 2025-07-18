// import React ,{useCallback} from 'react'
// import { useForm } from 'react-hook-form'
// import { Button ,Input ,Select , RTE} from '../index'
// import service from '../../appwrite/config'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'


// export default function PostForm({ post }) {
//     const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
//         defaultValues: {
//             title: post?.title || "",
//             slug: post?.$id || "",
//             content: post?.content || "",
//             status: post?.status || "active",
//         },
//     });

//     const navigate = useNavigate();
//     const userData = useSelector((state) => state.auth.userData);

//     const submit = async (data) => {
//         if (post) {
//             const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;

//             if (file) {
//                 service.deleteFile(post.featuredImage);
//             }

//             const dbPost = await service.updatePost(post.$id, {
//                 ...data,
//                 featuredImage: file ? file.$id : undefined,
//             });

//             if (dbPost) {
//                 navigate(`/Post/${dbPost.$id}`);
//             }
//         } else {
//             const file = await service.uploadFile(data.image[0]);

//             if (file) {
//                 const fileId = file.$id;
//                 data.featuredImage = fileId;
//                 const dbPost = await service.createPost({ ...data, userId: userData.$id });

//                 if (dbPost) {
//                     navigate(`/Post/${dbPost.$id}`);
//                 }
//             }
//         }
//     };

//     const slugTransform = useCallback((value) => {
//         if (value && typeof value === "string")
//             return value
//                 .trim()
//                 .toLowerCase()
//                 .replace(/[^a-zA-Z\d\s]+/g, "-")
//                 .replace(/\s/g, "-");

//         return "";
//     }, []);

//     React.useEffect(() => {
//         const subscription = watch((value, { name }) => {
//             if (name === "title") {
//                 setValue("slug", slugTransform(value.title), { shouldValidate: true });
//             }
//         });

//         return () => subscription.unsubscribe();
//     }, [watch, slugTransform, setValue]);

//     return (
//         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
//             <div className="w-2/3 px-2">
//                 <Input
//                     label="Title :"
//                     placeholder="Title"
//                     className="mb-4"
//                     {...register("title", { required: true })}
//                 />
//                 <Input
//                     label="Slug :"
//                     placeholder="Slug"
//                     className="mb-4"
//                     {...register("slug", { required: true })}
//                     onInput={(e) => {
//                         setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//                     }}
//                 />
//                 <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//             </div>
//             <div className="w-1/3 px-2">
//                 <Input
//                     label="Featured Image :"
//                     type="file"
//                     className="mb-4"
//                     accept="image/png, image/jpg, image/jpeg, image/gif"
//                     {...register("image", { required: !post })}
//                 />
//                 {post && (
//                     <div className="w-full mb-4">
//                         <img
//                             src={service.getFileView(post.featuredImage , fileId)}
//                             alt={post.title}
//                             className="rounded-lg"
//                         />
//                     </div>
//                 )}
//                 <Select
//                     options={["active", "inactive"]}
//                     label="Status"
//                     className="mb-4"
//                     {...register("status", { required: true })}
//                 />
//                 <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
//                     {post ? "Update" : "Submit"}
//                 </Button>
//             </div>
//         </form>
//     );
// }        


import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select, RTE } from '../index';
import service from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.$id || '',
      content: post?.content || '',
      status: post?.status || 'active',
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const [loading, setLoading] = useState(false);

  const submit = async (data) => {
    setLoading(true);
    try {
      if (post) {
        const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;

        if (file) {
          service.deleteFile(post.featuredImage);
        }

        const dbPost = await service.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : undefined,
        });

        if (dbPost) {
          navigate(`/Post/${dbPost.$id}`);
        }
      } else {
        const file = await service.uploadFile(data.image[0]);

        if (file) {
          const fileId = file.$id;
          data.featuredImage = fileId;
          const dbPost = await service.createPost({ ...data, userId: userData.$id });

          if (dbPost) {
            navigate(`/Post/${dbPost.$id}`);
          }
        }
      }
    } catch (error) {
      console.error('Post submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string')
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, '-')
        .replace(/\s/g, '-');

    return '';
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="w-full flex flex-col lg:flex-row gap-6">
      {/* Left Column */}
      <div className="w-full lg:w-2/3 space-y-5">
        <Input
          label="Title"
          placeholder="Enter post title"
          {...register('title', { required: true })}
        />
        <Input
          label="Slug"
          placeholder="Post slug"
          {...register('slug', { required: true })}
          onInput={(e) =>
            setValue('slug', slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            })
          }
        />
        <RTE
          label="Content"
          name="content"
          control={control}
          defaultValue={getValues('content')}
        />
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/3 space-y-5">
        <Input
          label="Featured Image"
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register('image', { required: !post })}
        />

        {post && post.featuredImage && (
          <div className="rounded-md overflow-hidden">
            <img
              src={service.getFileView(post.featuredImage)}
              alt={post.title}
              className="rounded-lg w-full object-cover max-h-56"
            />
          </div>
        )}

        <Select
          options={['active', 'inactive']}
          label="Status"
          {...register('status', { required: true })}
        />

        <Button
          type="submit"
          bgColor={post ? 'bg-green-600 hover:bg-green-700' : undefined}
          className="w-full"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : post ? (
            'Update Post'
          ) : (
            'Create Post'
          )}
        </Button>
      </div>
    </form>
  );
}

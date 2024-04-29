import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

const BlogPage = (prop) => {
  const p = useParams();
  console.log(prop.data);
  const blogPost = prop.data.find((post) => post.id === +p.id);
  console.log(blogPost);
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-[400px] object-cover object-center"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{blogPost.title}</h2>
          <p className="text-gray-600 mb-2">By {blogPost.author}</p>
          <p className="text-gray-800">{blogPost.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

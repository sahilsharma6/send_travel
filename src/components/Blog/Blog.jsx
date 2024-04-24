// import p2_tour from "../assets/tour2.jpg";
// import p3_tour from "../assets/tour3.jpg";
// import p4_tour from "../assets/tour4.jpg";

import { Link } from "react-router-dom";
import blogData from "./data";


// export default tour_data;

const Card = (props) => {
  return (
    <>
      <Link to={`/blog/${props.idd}`}>
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 relative transform hover:scale-110 transition-transform duration-300 cursor-pointer">
          <img
            className="w-full h-44 sm:h-56 object-cover"
            src={props.image}
            // alt={props.name}
          />
          <div className="px-4 py-2 sm:px-6 sm:py-4">
            <div className="text-gray-900 ">{props.title} Days</div>
            <div className="font-bold text-xl mb-2  truncate">
              {props.description}
            </div>
            <div className="mb-2">
              <div
                className="text-gray-400 font-bold  py-1 px-1"
              >
                Read More
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

const Blog = () => {
  return (
    <div className="bg-gray-100">
      <div className="popular w-[90%] mx-auto p-4">
        <h1 className="text-2xl font-bold my-4 text-center">Blogs</h1>
        <hr className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {blogData.map((item, i) => {
            console.log(item.id, i);
            return (
              <Card
                key={item.id}
                id={item.id}
                description={item.description}
                image={item.image}
                price={item.price}
                title={item.title}
                idd={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;

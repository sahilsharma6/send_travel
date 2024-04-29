import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import WhyChooseUs from "./components/Whyus";
import Footer from "./components/Footer";
// import Testimonial from "./components/Testimonial";
// import Services from "./components/Services";
// import Recommendation_tour from "./components/Recommendation_tour";
// import Recommendation_hotel from "./components/Recommendation_hotel";
// import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
// // import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogPage from "./components/Blog/BlogPage";
import blogData from "./components/Blog/data";
import Tour from "./components/Tour/Tour";
import Ptour from "./components/Tour/Ptour";
import data from "./components/Tour/TourData";
// import Tourpage from "./components/test/Tourpage";
function App() {
  console.log(data[1].types);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <div className="fake-header h-[15vh] bg-transparent"></div>

          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/blog",
      element: (
        <>
          <Navbar />
          <div className="fake-header h-[15vh] bg-transparent"></div>
          <Blog />
          <Footer />
        </>
      ),
    },
    {
      path: "/blog/:id",
      element: (
        <>
          <Navbar />
          <div className="fake-header h-[15vh] bg-transparent"></div>
          {/* <Home /> */}
          <BlogPage data={blogData} />

          <Footer />
        </>
      ),
    },
    {
      path: "/tour",
      element: (
        <>
          <Navbar />
          <div className="fake-header h-[15vh] bg-transparent"></div>
          <Tour />
          <Footer />
        </>
      ),
    },
    {
      path: `/tour/${data[0].title}/:id`,
      element: (
        <>
          <Navbar />
          <div className="fake-header h-[15vh] bg-transparent"></div>

          <Ptour data={data[0].types} />

          <Footer />
        </>
      ),
    },
    {
      path: `/tour/${data[1].title}/:id`,

      element: (
        <>
          <Navbar />
          <div className="fake-header h-[15vh] bg-transparent"></div>

          <Ptour data={data[1].types} />

          <Footer />
        </>
      ),
    },
    {
      path: `/tour/${data[2].title}/:id`,
      element: (
        <>
          <Navbar />
          <div className="fake-header h-[15vh] bg-transparent"></div>

          <Ptour data={data[2].types} />

          <Footer />
        </>
      ),
    },
    {
      path: `/tour/${data[3].title}/:id`,
      element: (
        <>
          <Navbar />
          <div className="fake-header h-[15vh] bg-transparent"></div>

          <Ptour data={data[3].types} />
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <>
      <div>
        {/* <Navbar /> */}

        <RouterProvider router={router} />
        {/* <Home /> */}

        {/* <Footer /> */}
        {/* <Navbar />
        <div className="fake-header h-[15vh] bg-transparent"></div> */}
        {/* <Hero />
        <WhyChooseUs />
        <Testimonial />
        <Services />
        <Recommendation_tour /> */}
        {/* <Recommendation_hotel /> */}
        {/* <Blog /> */}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;

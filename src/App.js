import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Allcourses from "./Component/Allcourses/Allcourses";
import CategoryCourse from "./Component/CategoryCourse/CategoryCourse";
import Main from "./Layout/Main";
import About from "./Pages/About/About";
import Access from "./Pages/Access/Access";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import CourseDetails from "./Pages/CourseDetails/CourseDetails";
import Courses from "./Pages/Courses/Courses";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import News from "./Pages/News/News";
import NotFound from "./Pages/NotFound/NotFound";
import Signup from "./Pages/Signup/Signup";
import PrivetRoute from "./Routes/PrivetRoute";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch(`https://learning-platfrom-server-ismailsabbir.vercel.app/categories`),
        },
        {
          path: "/home",
          element: <Home></Home>,
          loader: () => fetch(`https://learning-platfrom-server-ismailsabbir.vercel.app/categories`),
        },
        {
          path: "/category-course/:id",
          element: <CategoryCourse></CategoryCourse>,
          loader: ({ params }) =>
            fetch(`https://learning-platfrom-server-ismailsabbir.vercel.app/category-course/${params.id}`),
        },

        {
          path: "/about",
          element: <About></About>,
          loader:()=>fetch('https://learning-platfrom-server-ismailsabbir.vercel.app/courses'),
        },
        {
          path: "/courses",
          element: <Allcourses></Allcourses>,
          loader: () => fetch(`https://learning-platfrom-server-ismailsabbir.vercel.app/courses`),
        },
        {
          path: "/course/:id",
          element: <Courses></Courses>,
          loader: ({ params }) =>
            fetch(`https://learning-platfrom-server-ismailsabbir.vercel.app/course/${params.id}`),
        },
        {
          path: "/detalscourse/:id",
          element: <CourseDetails></CourseDetails>,
          loader: ({ params }) =>
            fetch(`https://learning-platfrom-server-ismailsabbir.vercel.app/detalscourse/${params.id}`),
        },
        {
          path:'/enrollnow',
          element:<PrivetRoute><Access></Access></PrivetRoute>
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path:'/news',
          element:<News></News>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path: "*",
          element:<NotFound></NotFound>
        },
      ],
    },
  ]);
  return (
    <div className="Apps">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

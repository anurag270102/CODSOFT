import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
//import About from "../Pages/About";
import { Createjob } from "../Pages/Createjob";
import { Myjob } from "../Pages/Myjob";
import { SalaryPage } from "../Pages/SalaryPage";
import { UpdateJob } from "../Pages/UpdateJob";
import { Jobdetalis } from "../Pages/Jobdetalis";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "post-job", element: <Createjob /> },
      { path: "/my-job", element: <Myjob /> },
      { path: "/salary", element: <SalaryPage /> },

      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-jobs/${params.id}`),
      },
      { path: "/job/:id", element: <Jobdetalis /> },
    ],
  },
]);

export default router;

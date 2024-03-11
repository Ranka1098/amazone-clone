import { Outlet, createBrowserRouter } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Carousel from "./component/carousel/Carousel";
// import Login from "./component/login-page/Login";

const AppLayout = () => {
  return (
    <div>
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Carousel />,
      },
    ],
  },
]);

export default appRouter;

import { Outlet, createBrowserRouter } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const appRouter= createBrowserRouter([
{
path:"/",
element:<AppLayout />
}
])

export default appRouter;

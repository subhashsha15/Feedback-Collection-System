import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements,useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/HomePage";
import LandingPage from "./pages/landingpage/LandingPage";
import SignUp from "./pages/signup/SignUp";
import Admin from "./pages/admin/Admin";

const Layout = () => {
  const location  = useLocation();

  // Function to check if the current route is 'admin'
  const isCurrentRouteAdmin = () => {
    return location.pathname === '/admin';
  };

  return (
    <>
      <Navbar />
      <Outlet />
      {isCurrentRouteAdmin() ? null : <Footer />} {/* Render Footer only if the current route is not 'admin' */}
    </>
  )
}
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<LandingPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<HomePage />} />
        <Route path="form" element={<Form />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;

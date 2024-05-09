import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/HomePage";
import LandingPage from "./pages/landingpage/LandingPage";
import SignUp from "./pages/signup/SignUp";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
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

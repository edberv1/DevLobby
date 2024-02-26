import { createBrowserRouter } from "react-router-dom";
import About from "./components/organisms/About";
import PlayCodeArena from "./components/organisms/PlayCodeArena";
import Blog from "./components/organisms/Blog";
import Chat from "./components/organisms/Chat";
import LearnMore from "./components/organisms/LearnMore";
import ClientLayout from "./components/Pages/LayoutClient";
import AdminLayout from "./components/Pages/LayoutAdmin";
import Landing from "./components/organisms/Landing";
import Login from "./components/organisms/Login";
import Signup from "./components/organisms/Signup";
import ContactUs from "./components/organisms/ContactUs";
import Polls from "./components/molecules/Polls";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "playcodearena",
        element: <PlayCodeArena />,
      },
      {
        path: "polls",
        element: <Polls />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "learn-more",
        element: <LearnMore />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
  },
]);

export default router;

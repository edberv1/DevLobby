import { createBrowserRouter } from "react-router-dom";
import Home from "./components/organisms/Home"
import About from "./components/organisms/About"
import PlayCodeArena from "./components/organisms/PlayCodeArena"
import Blog from "./components/organisms/Blog"
import ClientLayout from "./components/Pages/LayoutClient";
import Chat from "./components/organisms/Chat";
import LearnMore from "./components/organisms/LearnMore";
import AdminLayout from './components/Pages/LayoutAdmin';
import Login from "./components/organisms/Login";

const router = createBrowserRouter([
  {
    path: "",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "chat",
        element: <Chat />
      },
      {
        path: "playcodearena",
        element: <PlayCodeArena />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "learn-more",
        element: <LearnMore />
      },
      {
        path: "Login",
        element: <Login />
      },
      {
        path: "admin",
        element: <AdminLayout />
      }
    ]
  },

])

export default router;
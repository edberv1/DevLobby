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
import PageNotFound from "./components/organisms/PageNotFound";
import ProfileCard from "./components/organisms/Profile";
import Testimonials from "./components/molecules/Testimonials";
import ChallengeArea from "./components/organisms/ChallengeArea";
import Verification from "./components/organisms/Verification";
import PasswordReset from "./components/molecules/PasswordReset";

const router = createBrowserRouter([
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
        path: "testimonials",
        element: <Testimonials />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "profile",
        element: <ProfileCard />,
      },

      {
        path: "/playcodearena/practical",
        element: <ChallengeArea />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
  },
  {
    path: "login",
    children: [
      {
        index: true,
        element: <Login />
      }, {
        path: "reset",
        element: <PasswordReset />
      }
    ]
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "user/:id/verify/:token",
    element: <Verification />,
  },
  {
    path: "*",
    element: <PageNotFound />
  },
]);

export default router;
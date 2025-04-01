import App from './App.tsx';
import { createBrowserRouter } from "react-router";
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Googogaga from './Googogaga.tsx';
import Watage from './pages/Watage.tsx';

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
        { 
          index: true, Component: Home },
          {
            path: "/googogaga",
            Component: Googogaga,
          },
          { path: "/watage",
          Component: Watage,
        },
      ],
    },
    {path: "/login",
      Component: Login,}
    
]);
export default routes;
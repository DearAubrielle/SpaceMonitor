import App from './App.tsx';
import { createBrowserRouter } from "react-router";
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Googogaga from './Googogaga.tsx';
import Watage from './pages/Watage.tsx';
<<<<<<< Updated upstream
=======
import FloorPlan from './pages/FloorPlan.tsx';
import FloorplanPage from './pages/FloorplanPage.tsx';
>>>>>>> Stashed changes

const routes = createBrowserRouter([
  {
    
    Component: App,
    children: [
<<<<<<< Updated upstream
        { 
          index: true, Component: Home },
          {
            path: "/googogaga",
            Component: Googogaga,
          },
          { path: "/watage",
          Component: Watage,
        },
=======
        {index: true, Component: FloorplanPage },
        {path: "/home", Component: Home },
        {path: "/googogaga", Component: Googogaga },
        {path: "/watage", Component: Watage },
        {path: "/floorplan",Component: FloorPlan},
        {path: "/floorplanP", Component: FloorplanPage}, 
>>>>>>> Stashed changes
      ],
    },
    {path: "/login",
      Component: Login,}
    
]);
export default routes;
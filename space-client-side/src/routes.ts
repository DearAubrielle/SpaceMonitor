import App from './App.tsx';
import { createBrowserRouter } from "react-router";
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Googogaga from './Googogaga.tsx';
import Watage from './pages/Watage.tsx';
import FloorPlan from './pages/FloorPlan.tsx';
import FloorplanPage from './pages/FloorplanPage.tsx';

const routes = createBrowserRouter([
  {
    
    Component: App,
    children: [
        {index: true, Component: FloorplanPage },
        {path: "/home", Component: Home },
        {path: "/googogaga", Component: Googogaga },
        {path: "/watage", Component: Watage },
        {path: "/floorplan",Component: FloorPlan},
        {path: "/floorplanP", Component: FloorplanPage},
      ],
    },
    {path: "/login",
      Component: Login,}
    
]);
export default routes;
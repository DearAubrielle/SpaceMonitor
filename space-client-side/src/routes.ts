import App from './App.tsx';
import { createBrowserRouter } from "react-router";
import Statefive from './components/Statefive.tsx';

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
        { 
          index: true, Component: Statefive }
      ],
    }
]);
export default routes;
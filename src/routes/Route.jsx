import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";

export const router = createBrowserRouter([
   {
     path: "/",
     element: <Root/>,
     children : [
      {
         index : true,
         element : <Home/>
      }
     ]
   },
 ]);
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPassword from "../pages/CheckPassword";
import Home from "../pages/Home";
import Message from "../components/Message";
import AuthLayouts from "../layout";

const router = createBrowserRouter([
{
    path: "/",
    element: <App/>,
    children: [
        {
            path: "register",
            element: <AuthLayouts><RegisterPage/></AuthLayouts>
        },
        {
            path: "email",
            element:<AuthLayouts><CheckEmailPage/></AuthLayouts> 
        },
        {
            path: "password",
            element: <AuthLayouts><CheckPassword/></AuthLayouts> 
        },
        {
            path: "",
            element: <Home/>,
            children: [
                {
                    path: ":userId",
                    element: <Message/>
                }
            ]
        }
    ]
}
])

export default router
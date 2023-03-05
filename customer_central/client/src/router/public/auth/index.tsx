import Router from "@/class/router";
import Page from "@/page";
import { RouteObject } from "react-router-dom";

class AuthRouter extends Router {
    static routes: RouteObject[] = [
        {
            path: "sign-in",
            element: <Page.Auth.SignIn />,
        }
    ]
}

export default AuthRouter

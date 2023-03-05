import Router from "@/class/router";
import { RouteObject } from "react-router-dom";
import AuthRouter from "./auth";

class PublicRouter extends Router {
    static routes: RouteObject[] = [
        ...AuthRouter.routes,
    ]
}

export default PublicRouter

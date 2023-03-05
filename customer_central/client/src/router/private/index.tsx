import Router from "@/class/router";
import { RouteObject } from "react-router-dom";
import PanelRouter from "./panel";

class PrivateRouter extends Router {
    static routes: RouteObject[] = [
        ...PanelRouter.routes,
    ]
}

export default PrivateRouter

import Router from "@/class/router";
import Page from "@/page";
import { Navigate, RouteObject } from "react-router-dom";

class PanelRouter extends Router {
    static routes: RouteObject[] = [
        {
            path: "/panel",
            element: <Navigate to="/panel/home" replace={true} />
        },
        {
            path: "/panel/home",
            element: <Page.Panel.Home />,
        },
    ]
}

export default PanelRouter

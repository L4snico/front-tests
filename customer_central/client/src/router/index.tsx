import { createBrowserRouter, Navigate } from "react-router-dom"
import PrivateRouter from "./private"
import PublicRouter from "./public"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/sign-in" replace={true} />
    },
    ...PublicRouter.routes,
    ...PrivateRouter.routes,
])

export default router

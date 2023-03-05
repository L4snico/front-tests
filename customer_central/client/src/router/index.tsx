import { createBrowserRouter, Navigate } from "react-router-dom"
import PublicRouter from "./public"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/sign-in" replace={true} />
    },
    ...PublicRouter.routes,
])

export default router

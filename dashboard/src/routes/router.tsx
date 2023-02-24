import { Component, Page, T } from "@/modules"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Page.Dashboard />,
		errorElement: <Page.Error404 />,
	},
])

class Routes extends Component {
	component: T.Component = Routes

	static build(): JSX.Element {
		return <RouterProvider router={router} />
	}
}

export default Routes

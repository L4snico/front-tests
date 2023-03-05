import Component from "@/class/component"
import router from "@/router"
import { RouterProvider } from "react-router-dom"

class Routes extends Component {
	element: T.Component = Routes

	static build(): JSX.Element {
		return <RouterProvider router={router} />
	}
}

export default Routes

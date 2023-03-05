import Component from "@/class/Component"
import router from "@/router"
import { RouterProvider } from "react-router-dom"

class Routes extends Component {
	component: T.Component = Routes

	static build(): JSX.Element {
		return <RouterProvider router={router} />
	}
}

export default Routes

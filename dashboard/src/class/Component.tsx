import { T } from "@/modules"
import React from "react"

class Component<IProps = {}> extends React.Component<IProps> {
	component: T.Component = Component

	static build() {
		return <></>
	}

	render() {
		return <this.component.build {...this.props} />
	}
}

export default Component

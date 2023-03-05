import React from "react"

class Component<Props = {}> extends React.Component<Props> {
	component: T.Component = Component

	static build() {
		return <></>
	}

	render() {
		return <this.component.build {...this.props} />
	}
}

export default Component

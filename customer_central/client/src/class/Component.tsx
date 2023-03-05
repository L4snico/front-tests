import React from "react"

class Component<Props = {}> extends React.Component<Props> {
	element: T.Component = Component

	static build() {
		return <></>
	}

	render() {
		return <this.element.build {...this.props} />
	}
}

export default Component

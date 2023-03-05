import React from "react"

class Component<Props = {}> extends React.Component<Props> {
	element: T.Component<Props> = Component

	static build(props: any) {
		return <></>
	}

	render() {
		return <this.element.build {...this.props} />
	}
}

export default Component

import Component from "@/class/Component"

class M {
	static Component = Component
}

namespace T {
	export interface Component {
		build: () => JSX.Element
	}
}

export default M
export { Component }
export type { T }

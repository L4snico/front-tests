import Component from "@/class/Component"

class Modules {
	static Component = Component
}

namespace Module {
	export interface Component {
		build: () => JSX.Element
	}
}

export default Modules
export { Component }
export type { Module }

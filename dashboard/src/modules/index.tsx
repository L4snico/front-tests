import Component from "class/Component"
import Page from "pages"
import Routes from "routes/router"

namespace T {
	export interface Component {
		build: () => JSX.Element
	}
}

export { Component, Page, Routes }
export type { T }

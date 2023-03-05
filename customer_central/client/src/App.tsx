import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import Component from "@/class/component"
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"
import Routes from "@/router/routes"
import React from "react"
import ColorModeContext from "./context/color_mode"

class App extends Component {
	element: T.Component = App

	static build(): JSX.Element {
		const [mode, setMode] = React.useState<"light" | "dark">("dark")
		const colorMode = React.useMemo(
			() => ({
				toggleColorMode: () => setMode((prevMode) => prevMode === "light" ? "dark" : "light")
			}),
			[],
		)

		const theme = React.useMemo(
			() => (
				createTheme({
					palette: {
						mode,
						primary: {
							main: mode === "light" ? "#06283D" : "#47B5FF",
						},
						secondary: {
							main: mode === "light" ? "#47B5FF" : "#06283D",
						},
					},
				})
			),
			[mode],
		)
		
		return <>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes />
				</ThemeProvider>
			</ColorModeContext.Provider>
		</>
	}
}

export default App

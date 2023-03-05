import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import Component from "@/class/component"
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"
import Routes from "@/router/routes"

const theme = createTheme({
	palette: {
		mode: "dark",
	},
})

class App extends Component {
	element: T.Component = App

	static build(): JSX.Element {
		return <>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes />
			</ThemeProvider>
		</>
	}
}

export default App

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import Component from "@/class/Component"
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"

const theme = createTheme({
	palette: {
		mode: "dark",
	},
})

class App extends Component {
	component: T.Component = App

	static build(): JSX.Element {
		return <>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				asd
			</ThemeProvider>
		</>
	}
}

export default App

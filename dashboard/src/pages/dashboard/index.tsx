import {
	AppBar,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material"
import { Component, T } from "modules"
import { Menu as MenuIcon, Airplay } from "@mui/icons-material"

class Dashboard extends Component {
	component: T.Component = Dashboard

	static build(): JSX.Element {
		return (
			<>
				<AppBar
					position="absolute"
					sx={{
						zIndex: (theme) => theme.zIndex.drawer + 1,
						border: "inherit",
						borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
					}}
					variant="outlined"
				>
					<Toolbar>
						<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
							<MenuIcon />
						</IconButton>
						<Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
							Cigarette
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer variant="persistent" open={true}>
					<Toolbar></Toolbar>
					<List>
						<ListItem>
							{/* <Tooltip title="Dashboard" placement="right" arrow> */}
								<ListItemButton>
									<ListItemIcon
										// sx={{
										// 	minWidth: 0,
										// }}
									>
										<Airplay />
									</ListItemIcon>
									<ListItemText primary="Dashboard" />
								</ListItemButton>
							{/* </Tooltip> */}
						</ListItem>
					</List>
				</Drawer>
			</>
		)
	}
}

export default Dashboard

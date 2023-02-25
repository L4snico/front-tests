import {
	AppBar,
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	CssBaseline,
	Drawer,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Paper,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material"
import { Component, T } from "modules"
import { Menu as MenuIcon, Airplay, SmokingRooms } from "@mui/icons-material"

const drawerWidth = 200

class Dashboard extends Component {
	component: T.Component = Dashboard

	static build(): JSX.Element {
		return (
			<>
				<Box sx={{ display: "flex" }}>
					<CssBaseline />
					<AppBar
						position="fixed"
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
					<Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
						<Drawer variant="permanent" open={true}>
							<Toolbar />
							<List>
								<ListItem>
									<ListItemButton>
										<ListItemIcon>
											<Airplay />
										</ListItemIcon>
										<ListItemText primary="Dashboard" />
									</ListItemButton>
								</ListItem>
							</List>
						</Drawer>
					</Box>
					<Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
						<Toolbar />
						<Grid container spacing={2} sx={{ mb: 2 }}>
							<Grid item xs={12} lg={8}>
								<Paper elevation={4} sx={{ p: 3 }}>
									<Typography variant="h6" sx={{ mb: 2 }}>
										Purchased Cigarettes
									</Typography>
									<Box sx={{ minWidth: 275, width: 275 }}>
										<Card>
											<CardContent>
												<Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
													<Chip
														icon={<SmokingRooms />}
														label="Dunhill"
														color="primary"
														variant="outlined"
													/>
												</Box>
												<Typography variant="body2" sx={{ mb: 1 }}>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam egestas
													massa a cursus. Class aptent taciti sociosqu ad litora torquent per conubia
													nostra, per inceptos himenaeos.
												</Typography>
												<Box sx={{ display: "flex", justifyContent: "center" }}>
													<Button variant="outlined">Smoke</Button>
												</Box>
											</CardContent>
										</Card>
									</Box>
								</Paper>
							</Grid>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={12} lg={8}>
								<Paper elevation={4} sx={{ p: 3 }}>
									<Typography variant="h6">Purchase Cigarettes</Typography>
								</Paper>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</>
		)
	}
}

export default Dashboard

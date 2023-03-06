import Component from "@/class/component";
import ColorModeContext from "@/context/color_mode";
import PanelContext from "@/context/panel";
import { DarkMode, Domain, KeyboardArrowDown, LightMode, Logout, Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Button, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Typography, useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

class TopBar extends Component {
    element: T.Component = TopBar

    static build(): JSX.Element {
        const theme = useTheme()
        const colorMode = React.useContext(ColorModeContext)
        const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null)
        const toggleMenu = Boolean(menuAnchor)
        const navigate = useNavigate()
        const panel = React.useContext(PanelContext)
        
        return <>
            <AppBar
                position="absolute"
                elevation={0}
                color="primary"
                variant="outlined"
                sx={{ 
                    borderRight: 0, 
                    borderTop: 0, 
                    borderLeft: 0, 
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
            >
                <Toolbar>
                    <IconButton
                        sx={{ mr: 2 }}
                        onClick={panel.side_bar.toggleSize}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Domain sx={{ mr: 1 }} color={theme.palette.mode === "light" ? "secondary" : "primary"} />
                    <Typography sx={{ flexGrow: 1 }}>Domain</Typography>
                    <IconButton
                        onClick={colorMode.toggleColorMode}
                        sx={{ mr: 1, color: "#FFF" }}
                    >
                        {theme.palette.mode === "light" ? <DarkMode /> : <LightMode />}
                    </IconButton>
                    <Button
                        variant="text"
                        onClick={(e) => setMenuAnchor(e.currentTarget)}
                        endIcon={<KeyboardArrowDown />}
                        sx={{ color: "#FFF" }}
                    >
                        Customer
                    </Button>
                    <Menu
                        open={toggleMenu}
                        anchorEl={menuAnchor}
                        onClose={() => setMenuAnchor(null)}
                    >
                        <MenuItem onClick={() => [setMenuAnchor(null), navigate("/")]}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </>   
    }
}

export default TopBar
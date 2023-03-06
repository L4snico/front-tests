import Component from "@/class/component";
import PanelContext from "@/context/panel";
import { Apps, Description, Home, SupportAgent } from "@mui/icons-material";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Tooltip } from "@mui/material";
import React from "react";

const side_bar_width = 200

interface SideBarItemProps {
    icon: JSX.Element
    text: string
}
class SideBarItem extends Component<SideBarItemProps> {
    element = SideBarItem

    static build(props: SideBarItemProps): JSX.Element {
        const panel = React.useContext(PanelContext)

        return <>
            <ListItem>
                {panel.side_bar.size === "normal" && <>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                        }}
                    >
                        <ListItemIcon>
                            {props.icon}
                        </ListItemIcon>
                        <ListItemText primary={props.text} />
                    </ListItemButton>
                </>}

                {panel.side_bar.size === "small" && <>
                    <Tooltip title={props.text} placement="right">
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                {props.icon}
                            </ListItemIcon>
                        </ListItemButton>
                    </Tooltip>
                </>}
            </ListItem>
        </>
    }
}

class SideBar extends Component {
    element: T.Component = SideBar

    static build(): JSX.Element {
        return <>
            <Box sx={{ width: { sm: side_bar_width }, flexShrink: { sm: 0 } }}>
                <Drawer variant="permanent" open={true}>
                    <Toolbar />
                    <List>
                        <SideBarItem icon={<Home />} text="Home" />
                        <SideBarItem icon={<Apps />} text="Apps" />
                        <SideBarItem icon={<Description />} text="Contracts" />
                        <SideBarItem icon={<SupportAgent />} text="Support" />
                    </List>
                </Drawer>
            </Box>
        </>
    }
}

export default SideBar

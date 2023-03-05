import Component from "@/class/component";
import { Apps, Description, Home, SupportAgent } from "@mui/icons-material";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";

const side_bar_width = 200

interface SideBarItemProps {
    icon: JSX.Element
    text: string
}
class SideBarItem extends Component<SideBarItemProps> {
    element = SideBarItem

    static build(props: SideBarItemProps): JSX.Element {
        return <>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        {props.icon}
                    </ListItemIcon>
                    <ListItemText primary={props.text} />
                </ListItemButton>
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

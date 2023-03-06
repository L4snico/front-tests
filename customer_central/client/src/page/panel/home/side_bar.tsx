import Component from "@/class/component";
import PanelContext from "@/context/panel";
import { Apps, Description, Home, SupportAgent } from "@mui/icons-material";
import { Box, CSSObject, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Theme, Toolbar, Tooltip } from "@mui/material";
import React from "react";

const side_bar_width = 200

const openedMixin = (theme: Theme): CSSObject => ({
    width: side_bar_width,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(11.4)})`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(11.4)})`,
    },
})

const CustomDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: side_bar_width,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
)

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
                {panel.side_bar.open && <>
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

                {!panel.side_bar.open && <>
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
        const panel = React.useContext(PanelContext)
        
        return <>
            <CustomDrawer variant="permanent" open={panel.side_bar.open}>
                <Toolbar />
                <List>
                    <SideBarItem icon={<Home />} text="Home" />
                    <SideBarItem icon={<Apps />} text="Apps" />
                    <SideBarItem icon={<Description />} text="Contracts" />
                    <SideBarItem icon={<SupportAgent />} text="Support" />
                </List>
            </CustomDrawer>
        </>
    }
}

export default SideBar

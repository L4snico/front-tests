import Component from "@/class/component";
import PanelContext from "@/context/panel";
import React from "react";
import SideBar from "./side_bar";
import TopBar from "./top_bar";

class PanelHomePage extends Component {
    element: T.Component = PanelHomePage

    static build(): JSX.Element {
        const [sideBarSize, setSideBarSize] = React.useState<"normal" | "small">("normal")
        const panel = React.useMemo(
            () => ({
                side_bar: {
                    size: sideBarSize,
                    toggleSize: () => setSideBarSize(sideBarSize === "normal" ? "small" : "normal"),
                }
            }),
            [sideBarSize]
        )
        
        return <>
            <PanelContext.Provider value={panel}>
                <TopBar />
                <SideBar />
            </PanelContext.Provider>
        </>
    }
}

export default PanelHomePage
